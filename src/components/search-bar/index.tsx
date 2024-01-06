import { startTransition, useEffect, useRef, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from '../card';

/**
 * Renders a search bar component.
 * The search bar allows users to search for their favorite character.
 * It displays a list of characters based on the search query.
 */
export default function SearchBar() {
	const [visible, setVisible] = useState(false);
	const [search, setSearch] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const { loading, error, data } = useQuery(gql`
		{
			characters (filter: {name: "${search}"}) {
				results {
					name
					image
					gender
					species
					status
					type
					location{
						name
					}
				}
			}
		}
	`);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [visible]);

	useEffect(() => {
		const handleKeyDown = (event: { keyCode: number }) => {
			if (event.keyCode === 27) startTransition(() => setVisible(false));
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	return (
		<>
			<div
				className="cursor-pointer w-full max-w-screen px-4 justify-center items-center"
				onClick={() => {
					startTransition(() => {
						setVisible(!visible);
						setSearch('');
					});
				}}>
				<input
					type="text"
					placeholder="Search your favorite character"
					className="input input-bordered w-full max-w-[90vw] cursor-pointer pointer-events-none bg-stone-900"
				/>
			</div>
			<div
				className={`${
					!visible && 'hidden'
				} absolute top-0 right-0 z-50 flex flex-col w-screen h-[100dvh] backdrop-filter backdrop-blur-xl justify-center items-center pt-5
				`}>
				<div className="flex flex-row justify-center items-center w-screen h-16 gap-3">
					<input
						type="text"
						value={search}
						ref={inputRef}
						onChange={(e) => startTransition(() => setSearch(e.target.value))}
						placeholder="Search your favorite character"
						className="input input-bordered w-screen max-w-[90dvw] text-2xl cursor-pointer min-h-[10dvh] p-2 h-lg bg-stone-900"
					/>
					<button
						className="btn btn-square bg-stone-900 border-stone-800	hover:bg-stone-800 hover:text-2xl hover:border-stone-900"
						onClick={() => {
							startTransition(() => {
								setVisible(!visible);
								setSearch('');
							});
						}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				{data && data.characters.results.length > 0 && search.length > 0 && (
					<div
						className="w-screen max-w-[90dvw] max-h-[80dvh] overflow-y-auto flex flex-row flex-wrap mt-10 justify-around gap-4 my-4
						">
						{data.characters.results.map(
							(character: {
								image: string;
								name: string;
								gender: string;
								species: string;
								status: string;
								type: string;
								location: { name: string };
							}) => {
								return (
									<Card
										{...character}
										key={character.name}
									/>
								);
							},
						)}
					</div>
				)}
				{loading && search.length > 0 && (
					<span className="loading loading-spinner text-accent my-10 p-6" />
				)}
				{error && (
					<div
						role="alert"
						className="alert alert-error">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-current shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>
							{error.message || 'We have a problem, please try again later.'}
						</span>
					</div>
				)}
			</div>
		</>
	);
}
