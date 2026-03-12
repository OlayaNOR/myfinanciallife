const API_URL = "http://localhost:8080";

export async function apiClient(
  endpoint: string,
  options: RequestInit = {}
) {

  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  if (response.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}