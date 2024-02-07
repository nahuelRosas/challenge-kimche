/**
 * Renders pagination buttons based on the current page and total number of pages.
 * @param currentPage - The current page number.
 * @param totalPages - The total number of pages.
 * @param onClick - The callback function to handle button click events.
 * @returns The rendered pagination buttons.
 */
export default function PaginationButtons({
  currentPage,
  totalPages,
  onClick,
}: {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
}) {
  function renderPageButton(page: number) {
    return (
      <button
        key={page}
        className={`join-item btn text-white text-xs ${
          page === currentPage ? "bg-stone-800" : "bg-stone-900"
        } hover:bg-stone-800 hover:text-lg hover:border-stone-900 border-stone-800`}
        onClick={() => onClick(page)}
      >
        {page}
      </button>
    );
  }

  function renderDots() {
    return (
      <button
        key={Math.random()}
        className="join-item btn btn-disabled bg-stone-900 hover:bg-stone-800 hover:text-lg hover:border-stone-900"
      >
        ...
      </button>
    );
  }

  function generatePageButtons() {
    const buttons = [];
    const totalPagesToShow = 4;

    if (totalPages <= totalPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(renderPageButton(i));
      }
    } else {
      const showFirstDots = currentPage > 4;
      const showLastDots = currentPage < totalPages - 3;

      if (showFirstDots) {
        buttons.push(renderPageButton(1));
        buttons.push(renderDots());
      }

      const start = Math.max(currentPage - 1, 1);
      const end = Math.min(currentPage + 1, totalPages);

      for (let i = start; i <= end; i++) {
        buttons.push(renderPageButton(i));
      }

      if (showLastDots) {
        buttons.push(renderDots());
        buttons.push(renderPageButton(totalPages));
      }
    }

    return buttons;
  }

  return (
    <div className="join w-auto flex justify-center align-center my-2">
      {generatePageButtons().map((button) => button)}
    </div>
  );
}
