export const post_groups = ["cafe", "music", "art", "books"] as const;
export type PostGroup = (typeof post_groups)[number];
