import { useQuery, type QueryObserverResult } from '@tanstack/react-query'
import { getHealth } from "../lib/api/apiClient";

export interface UseHealthReturn {
    isHealthy: boolean;
    isLoading: boolean;
    error: string | null;
    refetch: () => Promise<QueryObserverResult<boolean, Error>>;
}

export function useHealth(): UseHealthReturn {
    const {
        data: isHealthy = false,
        isLoading,
        error,
        refetch,
    } = useQuery<boolean, Error>({
        queryKey: ['health'],
        queryFn: async () => {
            try {
                await getHealth();
                return true;
            } catch (err) {
                return false;
            }
        },
        refetchOnWindowFocus: false,
    });

    return { isHealthy, isLoading, error: error?.message || null, refetch }
}