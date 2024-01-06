/**
 * Renders a pagination component with buttons for navigating between pages.
 *
 * @param currentPage - The current active page.
 * @param totalPages - The total number of pages.
 * @param onClick - The callback function to handle button click events.
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
				className={`join-item btn text-white ${
					page === currentPage ? 'bg-stone-800' : 'bg-stone-900'
				} hover:bg-stone-800 hover:text-2xl hover:border-stone-900`}
				onClick={() => onClick(page)}>
				{page}
			</button>
		);
	}

	function renderDots() {
		return (
			<button className="join-item btn btn-disabled bg-stone-900 hover:bg-stone-800 hover:text-2xl hover:border-stone-900">
				...
			</button>
		);
	}

	function generatePageButtons() {
		const buttons = [];
		const totalPagesToShow = 7;

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

			const start = Math.max(currentPage - 2, 1);
			const end = Math.min(currentPage + 2, totalPages);

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
		<div className="join">{generatePageButtons().map((button) => button)}</div>
	);
}
