import { postWaitlist } from "../lib/api/apiClient";
import { useMutation } from "@tanstack/react-query";


export interface WaitlistFormData {
    email:        string;
    phone_number: string;
}

export function useWaitlist() {
    return useMutation({
        mutationFn: (data :WaitlistFormData) => postWaitlist(data),
    });
}

