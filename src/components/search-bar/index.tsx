import { startTransition, useEffect } from 'react';
import { Character } from '../../types';
/**
 * Renders a search bar component.
 *
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.leftElement - The element to be rendered on the left side of the search bar.
 * @param {Character} props.filter - The filter object containing the search criteria.
 * @param {React.Dispatch<React.SetStateAction<Character>>} props.setFilter - The function to update the filter object.
 * @returns {JSX.Element} The rendered search bar component.
 */

export default function SearchBar({
	leftElement,
	filter,
	setFilter,
}: {
	leftElement?: JSX.Element;
	filter: Character;
	setFilter: React.Dispatch<React.SetStateAction<Character>>;
}): JSX.Element {
	useEffect(() => {
		const handleKeyDown = (event: { keyCode: number }) => {
			if (event.keyCode === 27)
				startTransition(() => setFilter((prev) => ({ ...prev, name: '' })));
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [setFilter]);
	return (
		<>
			<div className="cursor-pointer w-full max-w-screen px-4 justify-center items-center gap-3 ">
				{leftElement}
				<input
					type="text"
					id="search-bar"
					value={filter['name']}
					onChange={(e) =>
						setFilter((prev) => ({
							...prev,
							['name']: e.target.value,
						}))
					}
					placeholder="Search your favorite character"
					className="input input-bordered text-white w-screen max-w-[90dvw] cursor-pointer bg-stone-900"
				/>
			</div>
		</>
	);
}
