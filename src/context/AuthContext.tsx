import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import Backendless from "../lib/backendless";

type CurrentUser = {
  objectId?: string;
  email?: string;
  name?: string;
};

type AuthContextType = {
  user: CurrentUser | null;
  checking: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(function () {
    async function checkUser() {
      try {
        const currentUser = await Backendless.UserService.getCurrentUser();
        setUser(currentUser as CurrentUser | null);
      } catch (error) {
        setUser(null);
      }
      setChecking(false);
    }
    checkUser();
  }, []);

  async function login(email: string, password: string) {
    const loggedUser = await Backendless.UserService.login(
      email,
      password,
      true
    );
    setUser(loggedUser as CurrentUser);
  }

  async function register(name: string, email: string, password: string) {
    const newUser: any = new Backendless.User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    await Backendless.UserService.register(newUser);
    await login(email, password);
  }

  async function logout() {
    await Backendless.UserService.logout();
    setUser(null);
  }

  const value: AuthContextType = {
    user: user,
    checking: checking,
    login: login,
    register: register,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}