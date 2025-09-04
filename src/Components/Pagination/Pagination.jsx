const Pages = ({ setCurrentPage, currentPage, numOfPages }) => {
  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
  };

  const goToNextPage = () => {
    setCurrentPage((n) => n + 1);
  };

  const goToPrevPages = () => {
    setCurrentPage((n) => n - 1);
  };

  return (
    <div className="pagination-container">
      {currentPage != 0 && (
        <span className="page-number" onClick={goToPrevPages}>
          ⬅️
        </span>
      )}
      {/* Used Event delegation here for not to attach multiple event listner and just use one to handle all list */}
      <div onClick={(e) => handlePageChange(e)}>
        {[...Array(numOfPages).keys()].map((n) => (
          <span
            className={`page-number ${currentPage === n ? "active-page" : ""}`}
            key={n}
          >
            {n}
          </span>
        ))}
      </div>
      {currentPage + 1 !== numOfPages && (
        <span className="page-number" onClick={goToNextPage}>
          ➡️
        </span>
      )}
    </div>
  );
};

export default Pages;
