import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { MOCK_POSTS } from "@/data/mockPosts";
import type { Post } from "@/types/rental";

export interface PostState {
  posts: Post[];
  selectedPostId: string | null;
}

const initialState: PostState = {
  posts: MOCK_POSTS,
  selectedPostId: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.unshift(action.payload);
    },
    hydrateUserPosts(state, action: PayloadAction<Post[]>) {
      const existing = new Set(state.posts.map((p) => p.id));
      const incoming = action.payload.filter(
        (p) => p.source === "user" && !existing.has(p.id),
      );
      if (incoming.length > 0) {
        state.posts = [...incoming, ...state.posts];
      }
    },
    selectPost(state, action: PayloadAction<string | null>) {
      state.selectedPostId = action.payload;
    },
    removePost(state, action: PayloadAction<{ id: string; pin: string }>) {
      const post = state.posts.find((p) => p.id === action.payload.id);
      if (!post || post.pin !== action.payload.pin) return;
      state.posts = state.posts.filter((p) => p.id !== action.payload.id);
      if (state.selectedPostId === action.payload.id) {
        state.selectedPostId = null;
      }
    },
  },
});

export const { addPost, hydrateUserPosts, selectPost, removePost } =
  postSlice.actions;

export default postSlice.reducer;
