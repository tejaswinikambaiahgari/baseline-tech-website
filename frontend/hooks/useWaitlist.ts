import { postWaitlist } from "../lib/api/apiClient";
import { useMutation } from "@tanstack/react-query";

export const SKILL_LEVELS = [
  "Complete Beginner",
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

export type SkillLevel = typeof SKILL_LEVELS[number];


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
