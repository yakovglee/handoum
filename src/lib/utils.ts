import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Data } from "../utils/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterWordsByPos = (data: Data[], pos: string) => {
  const words = data
    .filter((d) => d.word.pos === pos)
    .map((d) => d.word.surface);
  return [...new Set(words)];
};
