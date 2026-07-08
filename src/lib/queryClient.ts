import { QueryClient } from "@tanstack/react-query";

/** Shared React Query client — wire API services in src/services/. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
});
