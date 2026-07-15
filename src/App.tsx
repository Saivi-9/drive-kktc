import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import AppRouter from "./routes/AppRouter";

const fallback = (
  <div className="grid min-h-screen place-items-center bg-slate-50 text-slate-900">
    <div className="flex flex-col items-center gap-4">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-[#0F4C81]" />
      <p className="text-sm font-medium">Preparing your route experience…</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={fallback}>
        <AppRouter />
      </Suspense>
    </Layout>
  );
}
