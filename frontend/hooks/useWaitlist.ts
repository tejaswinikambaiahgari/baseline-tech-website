import { postWaitlist } from "../lib/api/apiClient";
import { useMutation } from "@tanstack/react-query";

export type SkillLevel = "Complete Beginner" | "Beginner" | "Intermediate" | "Advanced";

export interface WaitlistForm {
    name: string;
    email: string;
    phoneNumber?: string;
    age: number;
    skillLevel: SkillLevel;
}

export function useWaitlist() {
    const mutation =  useMutation({
        mutationFn: (data :WaitlistForm) => postWaitlist(data),
    });

    return {
        addToWaitlist: mutation.mutate,
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
    };
}
