import { create } from "zustand";

type SearchState = {
  searchWords: string[];
  searchPos?: string;
  setSearchPos: (pos: string) => void;
  setSearchWords: (words: string[]) => void;
  setSearchFromQuery: (query: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  searchWords: [],
  searchPos: "",
  setSearchPos: (pos) => set({ searchPos: pos }),
  setSearchWords: (words) => set({ searchWords: words }),
  setSearchFromQuery: (query) =>
    set({
      searchWords: Array.from(
        new Set(
          query
            .split(/[\s,]+/)
            .map((w) => w.trim())
            .filter(Boolean)
        )
      ),
    }),
}));
