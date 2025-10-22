import { example_data } from "@/utils/response";
import type { Data } from "@/utils/types";
import { create } from "zustand";

interface TextState {
  text: string;
  setText: (value: string) => void;
  data: Data[];
  loading: boolean;
  error: string | null;
  fetchParsedData: () => Promise<void>;
}

export const useTextStore = create<TextState>((set, get) => ({
  text: "",
  setText: (value) => set({ text: value }),
  data: example_data,
  loading: false,
  error: null,

  fetchParsedData: async () => {
    const { text } = get();

    if (!text.trim()) {
      set({ error: "Text cannot be empty." });
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await fetch("https://mecab-ko-fastapi.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: Data[] = await response.json();
      set({ data: result, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch data", loading: false });
    }
  },
}));
