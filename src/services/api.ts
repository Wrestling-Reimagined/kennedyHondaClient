import axios from "axios";

// Normalize API URL to ensure it has a protocol and ends with /api
const normalizeApiUrl = (url: string | undefined): string => {
  const defaultUrl = "http://localhost:3001/api";

  if (!url) {
    return defaultUrl;
  }

  // Remove trailing slashes
  let normalized = url.trim().replace(/\/+$/, "");

  // If it doesn't start with http:// or https://, add https://
  if (!normalized.match(/^https?:\/\//)) {
    normalized = `https://${normalized}`;
  }

  // Ensure it ends with /api
  if (!normalized.endsWith("/api")) {
    normalized = `${normalized}/api`;
  }

  return normalized;
};

const API_URL = normalizeApiUrl(import.meta.env.VITE_API_URL);

// Log the API URL for debugging (both dev and prod)
console.log("API URL configured:", API_URL);
console.log("Raw VITE_API_URL:", import.meta.env.VITE_API_URL || "(not set)");

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
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

export const submitLead = async (
  leadData: LeadSubmission
): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post<ApiResponse>("/leads", leadData);
    return response.data;
  } catch (error) {
    // Log helpful debugging information
    if (error instanceof Error) {
      console.error("Error submitting lead:", error.message);
      console.error("API URL used:", API_URL);
      console.error("Full request URL:", `${API_URL}/leads`);
    }
    throw error;
  }
};
