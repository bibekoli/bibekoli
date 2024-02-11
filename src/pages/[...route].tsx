export default function CatchAllRoute() {
  return null;
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const target = "https://tools.bibekoli.com";
  const url = target + "/" + params.route.join("/");

  return {
    redirect: {
      destination: url,
      permanent: true,
    }
  };
}