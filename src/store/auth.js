import { defineStore } from "pinia";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    error: null,
    defaultUser: {
      email: "user@example.com",
      password: "password123",
    },
  }),
  actions: {
    async register(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.error = null;
      } catch (error) {
        this.error = error.message;
      }
    },
    async login(email, password) {
      try {
        if (
          email === this.defaultUser.email &&
          password === this.defaultUser.password
        ) {
          this.user = { email: this.defaultUser.email };
          this.error = null;
          return true;
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        this.error = error.message;
        return false;
      }
    },
    async logout() {
      this.user = null;
      this.error = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
