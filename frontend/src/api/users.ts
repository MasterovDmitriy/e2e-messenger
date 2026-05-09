export type SearchUserDto = {
  id: string;
  username: string;
  public_key_fingerprint: string | null;
};

const API_BASE_URL = "http://localhost:8000/api/v1/users";

export async function searchUsers(
  accessToken: string,
  query: string,
  limit = 20,
): Promise<SearchUserDto[]> {
  const searchParams = new URLSearchParams({
    query,
    limit: String(limit),
  });

  const response = await fetch(`${API_BASE_URL}/search?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to search users");
  }

  return (await response.json()) as SearchUserDto[];
}
