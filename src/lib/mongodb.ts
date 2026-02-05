import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

function getRequiredEnv(name: "MONGODB_URI" | "MONGODB_DB"): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not defined in environment variables`);
  }
  return value;
}

const uri = getRequiredEnv("MONGODB_URI");
const dbName = getRequiredEnv("MONGODB_DB");

let cachedClient: MongoClient | null = null;

export async function getMongoClient(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  const clientOptions: MongoClientOptions = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  };

  const client = new MongoClient(uri, clientOptions);
  cachedClient = await client.connect();
  return cachedClient;
}

export async function saveContactSubmission(submission: {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
  recaptchaVerification?: unknown;
  metadata?: {
    userAgent?: string;
    ip?: string;
  };
}): Promise<{ acknowledged: boolean; insertedId?: unknown }> {
  const client = await getMongoClient();
  const db = client.db(dbName);
  const collection = db.collection("contact_submissions");

  const document = {
    ...submission,
    createdAt: new Date(),
  };

  const { acknowledged, insertedId } = await collection.insertOne(document);

  return { acknowledged, insertedId };
}

export async function getCaptchaTokenUsageCount(captchaToken: string): Promise<number> {
  const client = await getMongoClient();
  const db = client.db(dbName);
  const collection = db.collection("contact_submissions");

  const count = await collection.countDocuments({ captchaToken });
  return count;
}
