import { startTransition, useEffect } from 'react';

export default function SearchBar({
	leftElement,
	rightElement,
	search,
	setSearch,
}: {
	setSearch: (value: string) => void;
	leftElement?: JSX.Element;
	rightElement?: JSX.Element;
	search: string;
}) {
	useEffect(() => {
		const handleKeyDown = (event: { keyCode: number }) => {
			if (event.keyCode === 27) startTransition(() => setSearch(''));
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [setSearch]);
	return (
		<>
			<div className="cursor-pointer w-full max-w-screen px-4 justify-center items-center gap-3 z-40">
				{leftElement}
				<input
					type="text"
					id="search-bar"
					value={search}
					onChange={(e) => startTransition(() => setSearch(e.target.value))}
					placeholder="Search your favorite character"
					className="input input-bordered text-white w-screen max-w-[90dvw] cursor-pointer bg-stone-900"
				/>
				{rightElement}
			</div>
		</>
	);
}
