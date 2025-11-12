import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {WaitlistForm} from "../../hooks/useWaitlist";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5173',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getHealth() {
    const response = await apiClient.get('/health');
    return response.data
}

export interface WaitlistResponse {
    message: string;
    id?:     string;
}

export async function postWaitlist(data :WaitlistForm) :Promise<WaitlistResponse> {
    const response = await apiClient.post<WaitlistResponse>('/api/waitlist', data);
    return response.data
}

export default apiClient;