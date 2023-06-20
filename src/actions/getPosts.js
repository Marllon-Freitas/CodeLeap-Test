import http from "../http";

export async function getPosts(limit, offset = 0) {
  const response = await http.get(`/careers/?limit=${limit}&offset=${offset}`);
  return response.data.results;
}
