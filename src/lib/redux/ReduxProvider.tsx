import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import type { Post } from "@/types/rental";
import { hydrateUserPosts } from "./postSlice";
import { makeStore, type AppStore } from "./store";

const STORAGE_KEY = "thikana.user-posts.v1";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState<AppStore>(() => makeStore());

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Post[];
        if (Array.isArray(parsed)) {
          store.dispatch(hydrateUserPosts(parsed));
        }
      }
    } catch {
      // Ignore malformed localStorage.
    }

    const unsubscribe = store.subscribe(() => {
      const userPosts = store
        .getState()
        .posts.posts.filter((post) => post.source === "user");
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userPosts));
      } catch {
        // Quota or private mode — keep going in memory.
      }
    });

    return unsubscribe;
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
