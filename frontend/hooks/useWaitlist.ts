import { postWaitlist } from "../lib/api/apiClient";
import { useMutation } from "@tanstack/react-query";

type SkillLevel = "Complete Beginner" | "Beginner" | "Intermediate" | "Advanced";

export interface WaitlistForm {
    name: string;
    email: string;
    phone_number?: string;
    age: number;
    skill_level: SkillLevel;
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
