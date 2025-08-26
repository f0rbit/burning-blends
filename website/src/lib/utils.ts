import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const base_url =
  process.env.NODE_ENV == "production"
    ? "https://blends.blog"
    : "http://localhost:3000";
