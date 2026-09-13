import { createSelector } from "@reduxjs/toolkit";
import { totalMonthlyCost, type Post } from "@/types/rental";
import { COST_MAX, COST_MIN } from "./filterSlice";
import type { RootState } from "./store";

function dayOfMonth(iso: string): number {
  const date = new Date(`${iso}T00:00:00`);
  return Number.isNaN(date.getTime()) ? 1 : date.getDate();
}

function matchesSearch(post: Post, term: string): boolean {
  if (!term.trim()) return true;
  const hay = [
    post.title,
    post.description,
    post.location.area,
    post.location.thana,
    post.location.district,
    post.location.division,
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(term.trim().toLowerCase());
}

export const selectFilteredPosts = createSelector(
  [(state: RootState) => state.posts.posts, (state: RootState) => state.filters],
  (posts, filters) => {
    return posts.filter((post) => {
      if (!matchesSearch(post, filters.searchTerm)) return false;
      if (filters.division && post.location.division !== filters.division) {
        return false;
      }
      if (filters.district && post.location.district !== filters.district) {
        return false;
      }
      if (filters.thana && post.location.thana !== filters.thana) {
        return false;
      }
      if (filters.area && post.location.area !== filters.area) {
        return false;
      }
      if (filters.category !== "all" && post.category !== filters.category) {
        return false;
      }
      if (
        filters.tenantType !== "all" &&
        post.tenantType !== filters.tenantType
      ) {
        return false;
      }

      const total = totalMonthlyCost(post.utilities);
      if (total < filters.minCost || total > filters.maxCost) return false;

      const available = post.availableFrom;
      if (filters.dateFrom && available < filters.dateFrom) return false;
      if (filters.dateTo && available > filters.dateTo) return false;

      const day = dayOfMonth(available);
      if (day < filters.availableDayStart || day > filters.availableDayEnd) {
        return false;
      }

      return true;
    });
  },
);

export const selectSelectedPost = createSelector(
  [
    (state: RootState) => state.posts.posts,
    (state: RootState) => state.posts.selectedPostId,
  ],
  (posts, id) => posts.find((p) => p.id === id) ?? null,
);

export const selectActiveFilterCount = createSelector(
  [(state: RootState) => state.filters],
  (filters) => {
    let count = 0;
    if (filters.searchTerm.trim()) count += 1;
    if (filters.division) count += 1;
    if (filters.district) count += 1;
    if (filters.thana) count += 1;
    if (filters.area) count += 1;
    if (filters.category !== "all") count += 1;
    if (filters.tenantType !== "all") count += 1;
    if (filters.minCost > COST_MIN || filters.maxCost < COST_MAX) count += 1;
    if (filters.dateFrom || filters.dateTo) count += 1;
    if (filters.availableDayStart > 1 || filters.availableDayEnd < 31) count += 1;
    return count;
  },
);
