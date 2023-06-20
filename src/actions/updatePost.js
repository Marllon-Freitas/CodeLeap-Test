import http from "../http";

export async function updatePost(id, data) {
  const response = await http.put(`/careers/${id}/`, data);
  return response.data;
}
