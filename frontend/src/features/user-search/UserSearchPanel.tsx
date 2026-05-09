import { FormEvent, useMemo, useState } from "react";

import { searchUsers, type SearchUserDto } from "../../api/users";

type UserSearchPanelProps = {
  accessToken: string;
};

export function UserSearchPanel({ accessToken }: UserSearchPanelProps): JSX.Element {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchUserDto[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("Type username and search");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => query.trim().length >= 1 && !isSubmitting, [query, isSubmitting]);

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Searching...");
    try {
      const users = await searchUsers(accessToken, query.trim(), 20);
      setResults(users);
      setSelectedUserId(null);
      setStatusMessage(users.length > 0 ? `Found users: ${users.length}` : "No users found");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected user search error";
      setStatusMessage(message);
      setResults([]);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      style={{
        marginTop: "2rem",
        maxWidth: "520px",
        border: "1px solid #334155",
        borderRadius: "12px",
        padding: "1rem",
        backgroundColor: "#111827",
      }}
    >
      <h2 style={{ marginTop: 0 }}>User search</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.75rem" }}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by username"
          minLength={1}
          maxLength={64}
          required
        />
        <button type="submit" disabled={!canSubmit}>
          Search
        </button>
      </form>

      <p style={{ marginBottom: "0.75rem", color: "#93c5fd" }}>{statusMessage}</p>
      <ul style={{ margin: 0, paddingLeft: "1rem", display: "grid", gap: "0.5rem" }}>
        {results.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong>
            <div style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
              fingerprint: {user.public_key_fingerprint ?? "not set"}
            </div>
            <button
              type="button"
              style={{ marginTop: "0.25rem" }}
              onClick={() => {
                setSelectedUserId(user.id);
                setStatusMessage(`Selected user: ${user.username}`);
              }}
            >
              Select
            </button>
            {selectedUserId === user.id ? (
              <div style={{ color: "#86efac", fontSize: "0.875rem" }}>Ready to open private chat</div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
