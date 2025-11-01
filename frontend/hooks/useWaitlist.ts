import { postWaitlist } from "../lib/api/apiClient";
import { useMutation } from "@tanstack/react-query";

// TODO: This interface/form input NEEDS to be discussed with them since this is incompatible with
// TODO: the current backend.
export interface WaitlistFormData {
    email:        string;
    phone_number: string;
}

export function useWaitlist() {
    return useMutation({
        mutationFn: (data :WaitlistFormData) => postWaitlist(data),
    });
}
