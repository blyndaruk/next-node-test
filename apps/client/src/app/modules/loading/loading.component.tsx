import Skeleton from '@mui/material/Skeleton';

import { FC } from 'react';

import styles from './loading.module.scss';

const LoadingComponent: FC = () => {
  return (
    <div className={styles.loading}>
      <Skeleton />

      <Skeleton animation={'wave'} />

      <Skeleton animation={false} />
    </div>
  );
};

export default LoadingComponent;
