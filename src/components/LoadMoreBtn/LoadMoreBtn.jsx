import React from 'react';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ currentPage, totalPages, trucks, handleLoadMore }) => {
  return (
    <>
      {currentPage < totalPages && trucks.length > 0 && (
        <button onClick={handleLoadMore} className={css.loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;