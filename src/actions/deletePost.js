import http from "../http";

export async function deletePost(id) {
  const response = await http.delete(`/careers/${id}/`);
  return response.data;
}
