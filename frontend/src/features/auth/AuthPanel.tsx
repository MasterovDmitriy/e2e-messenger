import { FormEvent, useMemo, useState } from "react";

import { login, me, register, type UserDto } from "../../api/auth";

type Mode = "register" | "login";

export function AuthPanel(): JSX.Element {
  const [mode, setMode] = useState<Mode>("register");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<UserDto | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("Idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(
    () => username.trim().length >= 3 && password.length >= 8 && !isSubmitting,
    [username, password, isSubmitting],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Loading...");
    try {
      if (mode === "register") {
        const user = await register({ username, password });
        setCurrentUser(user);
        setStatusMessage(`Registered user: ${user.username}`);
      } else {
        const tokenResponse = await login({ username, password });
        setToken(tokenResponse.access_token);
        const user = await me(tokenResponse.access_token);
        setCurrentUser(user);
        setStatusMessage(`Logged in as: ${user.username}`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected auth error";
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      style={{
        marginTop: "2rem",
        maxWidth: "420px",
        border: "1px solid #334155",
        borderRadius: "12px",
        padding: "1rem",
        backgroundColor: "#111827",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Auth</h2>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button type="button" onClick={() => setMode("register")} disabled={isSubmitting}>
          Register
        </button>
        <button type="button" onClick={() => setMode("login")} disabled={isSubmitting}>
          Login
        </button>
      </div>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.75rem" }}>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          minLength={3}
          maxLength={64}
          required
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          minLength={8}
          maxLength={128}
          required
        />
        <button type="submit" disabled={!canSubmit}>
          {mode === "register" ? "Create account" : "Sign in"}
        </button>
      </form>

      <p style={{ marginBottom: 0, color: "#93c5fd" }}>{statusMessage}</p>
      {token ? (
        <p style={{ marginBottom: 0, color: "#86efac", wordBreak: "break-all" }}>Token: {token}</p>
      ) : null}
      {currentUser ? (
        <p style={{ marginBottom: 0, color: "#fcd34d" }}>Current user id: {currentUser.id}</p>
      ) : null}
    </section>
  );
}
