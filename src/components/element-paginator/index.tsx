import PaginationButtons from '../pagination-buttons';
import { useQuery, gql } from '@apollo/client';
import { Character } from '../../types';
import { useState } from 'react';
import Card from '../card';
/**
 * Renders a paginated list of characters based on the provided filter.
 * @param filter - The filter to apply to the characters.
 * @returns The ElementPaginator component.
 */

export default function ElementPaginator({ filter }: { filter: Character }) {
	const [page, setPage] = useState(0);

	const GET_CHARACTERS = gql`
		query GetCharacters($page: Int!, $filter: FilterCharacter) {
			characters(page: $page, filter: $filter) {
				info {
					count
					pages
					next
					prev
				}
				results {
					name
					image
					gender
					species
					status
					type
					location {
						name
					}
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_CHARACTERS, {
		variables: {
			page,
			filter,
		},
	});
	return (
		<div className="flex flex-col w-full h-full justify-center align-center bg-stone-700">
			<div className="w-auto h-screen overflow-y-auto flex flex-row flex-wrap justify-around gap-4 mx-5 my-5">
				{data &&
					data.characters.results.map(
						(
							character: JSX.IntrinsicAttributes & {
								image: string;
								name: string;
								status: string;
								species: string;
								gender: string;
								type: string;
								location: { name: string };
							},
							index: number,
						) => {
							return (
								<Card
									{...character}
									key={index}
								/>
							);
						},
					)}
				{loading && (
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
			<PaginationButtons
				currentPage={page}
				totalPages={data?.characters.info.pages || 42}
				onClick={setPage}
			/>
		</div>
	);
}
