import http from "../http";

export async function createPost(data) {
  const response = await http.post(`/careers/`, data);
  return response.data;
}