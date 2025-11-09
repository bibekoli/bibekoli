"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export type ToastType = "success" | "error" | "info";

export type ToastOptions = {
  type?: ToastType;
  title?: string;
  description: string;
  durationMs?: number;
};

type Toast = Required<Omit<ToastOptions, "durationMs">> & {
  id: string;
  durationMs: number;
};

type ToastContextType = {
  showToast: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((opts: ToastOptions) => {
    const id = Math.random().toString(36).slice(2);
    const toast: Toast = {
      id,
      type: opts.type ?? "info",
      title: opts.title ?? (opts.type === "success" ? "Success" : opts.type === "error" ? "Error" : "Notice"),
      description: opts.description,
      durationMs: opts.durationMs ?? 4000,
    };
    setToasts((prev) => [toast, ...prev]);
    if (toast.durationMs > 0) {
      setTimeout(() => remove(id), toast.durationMs);
    }
  }, [remove]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted && <ToastViewport toasts={toasts} onClose={remove} />}
    </ToastContext.Provider>
  );
}

function ToastViewport({ toasts, onClose }: { toasts: Toast[]; onClose: (id: string) => void }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed top-6 right-6 z-[1000] flex flex-col gap-2.5 w-[min(90vw,360px)]">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-right-2"
        >
          <div className="p-3.5 pr-10 flex items-start gap-3">
            {/* Icon */}
            <div className={[
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm",
              t.type === "success" && "bg-gradient-to-br from-emerald-500 to-green-600",
              t.type === "error" && "bg-gradient-to-br from-rose-500 to-red-600",
              t.type === "info" && "bg-gradient-to-br from-blue-500 to-indigo-600",
            ].filter(Boolean).join(" ")}
            >
              <Icon
                icon={t.type === "success" ? "fluent:checkmark-circle-20-filled" : t.type === "error" ? "fluent:dismiss-circle-20-filled" : "fluent:info-20-filled"}
                className="text-base text-white"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-quaternary mb-0.5 leading-tight">{t.title}</p>
              <p className="text-xs text-tertiary/80 leading-relaxed">{t.description}</p>
            </div>

            {/* Close Button */}
            <button
              aria-label="Close"
              onClick={() => onClose(t.id)}
              className="absolute top-2 right-2 rounded-md p-1 text-tertiary/50 hover:text-quaternary hover:bg-gray-100 transition-all duration-200"
            >
              <Icon icon="fluent:dismiss-20-regular" className="text-base" />
            </button>
          </div>

          {/* Accent Border */}
          <div className={[
            "absolute left-0 top-0 bottom-0 w-0.5",
            t.type === "success" && "bg-gradient-to-b from-emerald-500 to-green-600",
            t.type === "error" && "bg-gradient-to-b from-rose-500 to-red-600",
            t.type === "info" && "bg-gradient-to-b from-blue-500 to-indigo-600",
          ].filter(Boolean).join(" ")} />
        </div>
      ))}
    </div>,
    document.body
  );
}
