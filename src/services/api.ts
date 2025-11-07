import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export const submitLead = async (leadData: LeadSubmission): Promise<ApiResponse> => {
  const response = await apiClient.post<ApiResponse>('/leads', leadData);
  return response.data;
};

