import { gql, useQuery } from '@apollo/client';
import SearchBar from './components/search-bar';
import Card from './components/card';
import {
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactNode,
	useState,
} from 'react';
import { JSX } from 'react/jsx-runtime';
import PaginationButtons from './components/pagination-buttons';

function App() {
	const [page, setPage] = useState(0);
	const { loading, error, data } = useQuery(gql`
		{
			characters(page: ${page}) {
				info {
					count
					pages
					next
					prev
					__typename
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
	`);

	return (
		<div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-stone-800 text-white">
			<div className="fixed flex flex-row flex-wrap justify-around items-center top-0 left-0 navbar bg-stone-900 w-screen h-16">
				<SearchBar />
				<div className="w-screen max-w-[90dvw] h-screen max-h-[70dvh] overflow-y-auto flex flex-row flex-wrap mt-5 justify-around gap-4 my-4">
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
				</div>
				<PaginationButtons
					currentPage={page}
					totalPages={data?.characters.info.pages || 42}
					onClick={setPage}
				/>
			</div>
		</div>
	);
}

export default App;
