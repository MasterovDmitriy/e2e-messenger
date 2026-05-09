export type RegisterPayload = {
  username: string;
  password: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type UserDto = {
  id: string;
  username: string;
  created_at: string;
};

export type TokenDto = {
  access_token: string;
  token_type: string;
};

const API_BASE_URL = "http://localhost:8000/api/v1/auth";

export async function register(payload: RegisterPayload): Promise<UserDto> {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return (await response.json()) as UserDto;
}

export async function login(payload: LoginPayload): Promise<TokenDto> {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return (await response.json()) as TokenDto;
}

export async function me(accessToken: string): Promise<UserDto> {
  const response = await fetch(`${API_BASE_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch current user");
  }

  return (await response.json()) as UserDto;
}
