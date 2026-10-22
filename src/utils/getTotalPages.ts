export const getTotalPages = (totalCount: number, limit: number = 10) => {
  return Math.ceil(totalCount / limit);
};
