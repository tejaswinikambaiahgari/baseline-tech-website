import {postWaitlist, WaitlistInput, WaitlistResponse} from "../lib/api/apiClient";
import {useMutation} from "@tanstack/react-query";


export interface UseWaitlistReturn {
    submitWaitlist: (data :WaitlistInput) => Promise<WaitlistResponse | null>;
    isLoading: boolean
    isSuccess: boolean
    error: string | null;
}

export function useWaitlist() :UseWaitlistReturn {
    const mutation = useMutation<WaitlistResponse, Error, WaitlistInput>({
        mutationFn: async (data) => await postWaitlist(data)
    });

    return {
        submitWaitlist: async (data) => {
            try {
                const res = await mutation.mutateAsync(data);
                return res;
            } catch (err) {
                return null;
            }
        },
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess,
        error: mutation.error?.message || null,
    };
}

