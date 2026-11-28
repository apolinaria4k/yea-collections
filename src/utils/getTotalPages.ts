export const getTotalPages = (totalCount: number, limit: number): number => {
  if (limit <= 0) return 0;
  return Math.ceil(totalCount / limit);
};
