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

// TODO: Data Types are just placeholders for what information we'll actually get from the form.
export async function postWaitlist(data :{
    name:             string;
    email:            string;
    age:              number;
    snow_sport_level: string;
}) {
    const response = await apiClient.post('/waitlist', data);
    return response.data
}

export default apiClient;