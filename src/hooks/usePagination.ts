import { useMemo } from 'react';

export const usePagination = (currentPage: number, totalPages: number): (number | string)[] => {
  const pagesArray = useMemo(() => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let last: number | undefined;

    if (totalPages === 1) {
      rangeWithDots.push(1);
    } else {
      range.push(1);

      for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < totalPages && i > 1) {
          range.push(i);
        }
      }

      range.push(totalPages);

      for (const i of range) {
        if (last) {
          if (i - last === 2) {
            rangeWithDots.push(last + 1);
          } else if (i - last !== 1) {
            rangeWithDots.push('...');
          }
        }

        rangeWithDots.push(i);
        last = i;
      }
    }

    return rangeWithDots;
  }, [totalPages, currentPage]);

  return pagesArray;
};
