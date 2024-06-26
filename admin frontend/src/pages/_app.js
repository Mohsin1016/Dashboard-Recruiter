import DashboardLayout from "@/layout/DashboardLayout";
import GeneralLayout from "@/layout/GeneralLayout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  if (router.pathname === "/signin") {
    return (
      <QueryClientProvider client={queryClient}>
        <GeneralLayout >
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </GeneralLayout>
      </QueryClientProvider>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLayout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </DashboardLayout>
    </QueryClientProvider>
  );
};

export default App;
