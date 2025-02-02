import React, { FC } from 'react';

import styles from './pagination.module.scss';

interface Props {
  page: number;
  setPage: (page: number) => void;
  pages?: number;
}

const Pagination: FC<Props> = ({ page, pages, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <span className={styles.pageNumber}>Page {page}</span>
      <button disabled={page >= (pages || 1)} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
