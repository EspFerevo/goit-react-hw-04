import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
