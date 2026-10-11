import { useState } from "react";
import type { FormEvent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../lib/helpers";

function Login() {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (email.trim() === "" || password === "") {
      setError("Email and password are required.");
      return;
    }
    if (mode === "register" && name.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    setBusy(true);
    try {
      if (mode === "login") {
        await login(email.trim(), password);
      } else {
        await register(name.trim(), email.trim(), password);
      }
      navigate("/create-blog");
    } catch (err) {
      setError(getErrorMessage(err));
      setBusy(false);
    }
  }

  function switchMode() {
    setError("");
    if (mode === "login") {
      setMode("register");
    } else {
      setMode("login");
    }
  }

  let heading = "Login";
  let submitText = "Login";
  let switchText = "No account yet? Register";
  if (mode === "register") {
    heading = "Register";
    submitText = "Create Account";
    switchText = "Already have an account? Login";
  }
  if (busy === true) {
    submitText = "Please wait...";
  }

  let nameField: ReactElement | null = null;
  if (mode === "register") {
    nameField = (
      <div>
        <label htmlFor="name" className="mb-1 block font-semibold text-white">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="input"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </div>
    );
  }

  let errorMessage: ReactElement | null = null;
  if (error !== "") {
    errorMessage = (
      <p className="rounded-md border border-navy-700 bg-navy-900 p-3 text-silver-light" role="alert">
        {error}
      </p>
    );
  }

  return (
    <div className="page-wrap max-w-md">
      <h1 className="mb-8 text-center text-4xl uppercase text-white">{heading}</h1>

      <form onSubmit={handleSubmit} className="card space-y-5">
        {errorMessage}
        {nameField}

        <div>
          <label htmlFor="email" className="mb-1 block font-semibold text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            autoComplete="email"
            value={email}
            onChange={function (event) {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block font-semibold text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input"
            autoComplete="current-password"
            value={password}
            onChange={function (event) {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn-primary w-full" disabled={busy}>
          {submitText}
        </button>

        <button
          type="button"
          className="w-full text-center text-silver hover:text-white"
          onClick={switchMode}
        >
          {switchText}
        </button>
      </form>
    </div>
  );
}

export default Login;