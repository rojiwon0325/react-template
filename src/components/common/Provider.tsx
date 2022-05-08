import React, { PropsWithChildren, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./ErrorBoundary";

const Provider: React.FC<PropsWithChildren<{ queryClient: QueryClient }>> = ({
  children,
  queryClient,
}) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <HelmetProvider>
              <Suspense
                fallback={
                  <div className="loading-circle border-8 border-gray-400 border-t-gray-200" />
                }
              >
                {children}
              </Suspense>
            </HelmetProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Provider;
