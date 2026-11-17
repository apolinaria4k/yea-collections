import classes from './index.module.css';
import type { FC } from 'react';

interface Props {
  count: number;
}

const AllCollectionsSkeleton: FC<Props> = ({ count = 10 }) => {
  return (
    <>
      <ul className={classes.questionList}>
        {[...Array(count)].map((_, index) => (
          <li className={classes.item} key={index}></li>
        ))}
      </ul>
    </>
  );
};

export default AllCollectionsSkeleton;
