import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

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

// TODO: Both these types are temporary placeholders until we figure out what we want them to have.
export interface WaitlistInput {
    name:             string;
    email:            string;
    age:              number;
    snow_sport_level: string;
}

export interface WaitlistResponse {
    message: string;
    id?:     string;
}

export async function postWaitlist(data :WaitlistInput) :Promise<WaitlistResponse> {
    const response = await apiClient.post<WaitlistResponse>('/api/waitlist', data);
    return response.data
}

export default apiClient;