import ElementPaginator from './components/element-paginator';
import SearchBar from './components/search-bar';
import Drawer from './components/drawer';
import { Character } from './types';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [idCharacter, setIdCharacter] = useState<null | number>(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [filter, setFilter] = useState<Character>({
		species: '',
		status: '',
		gender: '',
		name: '',
		type: '',
	});

	const GET_CHARACTER = gql`
		query GetCharacter($id: ID!) {
			character(id: $id) {
				name
				status
				species
				type
				gender
				origin {
					name
					dimension
				}
				location {
					name
					type
					dimension
				}
				image
				episode {
					name
					air_date
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_CHARACTER, {
		variables: {
			id: idCharacter,
		},
	});

	useEffect(() => {
		if (idCharacter) {
			setModalOpen(true);
		}
	}, [idCharacter]);

	return (
		<div className="flex flex-col items-center justify-center w-[100dvw] h-[100dvh] bg-stone-800 text-white overflow-hidden">
			<div
				className={`${
					!modalOpen && 'hidden'
				} absolute top-0 right-0 z-50 flex flex-col w-screen h-[100dvh] backdrop-filter backdrop-blur-xl justify-center items-center pt-5
				`}
				onClick={() => {
					setModalOpen(false);
					setIdCharacter(null);
				}}>
				<div onClick={(e) => e.stopPropagation()}>
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
					{data && (
						<div className="bg-stone-900 shadow-xl flex flex-row">
							<figure>
								<img
									className="object-cover h-full"
									src={data?.character.image}
									alt={data?.character.name}
								/>
							</figure>
							<div className="card-body">
								<div className="flex flex-col flex-wrap gap-1">
									<span className="card-title text-pretty overflow-hidden">
										{data?.character.name}
									</span>
									{data?.character.status && (
										<div
											className={`badge ${
												data?.character.status === 'Dead'
													? 'badge-error'
													: data?.character.status === 'Alive'
													? 'badge-success'
													: 'badge-warning'
											}`}>
											{data?.character.status}
										</div>
									)}
								</div>

								<div className="flex flex-col flex-wrap w-full mt-3 gap-2">
									<div className="flex flex-row flex-wrap w-full gap-2 text-base">
										<span>Last known location:</span>
										<span>{data?.character.location.name}</span>
									</div>
									<div className="flex flex-row flex-wrap w-full gap-2 text-base">
										<span>Last dimension:</span>
										<span>{data?.character.location.dimension}</span>
									</div>

									<div className="flex flex-row flex-wrap w-full gap-2 text-base">
										<span>Origin:</span>
										<span>{data?.character.origin.name}</span>
									</div>
									<div className="flex flex-row flex-wrap w-full gap-2 text-base">
										<span>Species:</span>
										<span>{data?.character.species}</span>
									</div>
									{data?.character.type && (
										<div className="flex flex-row flex-wrap w-full gap-2 text-base">
											<span>Type:</span>
											<span>{data?.character.type}</span>
										</div>
									)}
									<div className="flex flex-row flex-wrap w-full gap-2 text-base">
										<span>Gender:</span>
										<span>{data?.character.gender}</span>
									</div>
									<div className="flex flex-row flex-wrap w-full gap-2 text-base">
										<span>First seen in:</span>
										{data?.character.episode.map(
											(
												episode: { name: string; air_date: string },
												index: number,
											) => {
												if (index === 0) {
													return (
														<span key={index}>
															{episode.name} - {episode.air_date}
														</span>
													);
												}
											},
										)}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="relative flex flex-row flex-wrap justify-around items-center top-0 left-0 navbar bg-stone-900 w-screen h-16">
				<SearchBar
					filter={filter}
					setFilter={setFilter}
					leftElement={
						<label className="btn btn-circle swap swap-rotate join-item btn btn-square bg-stone-900 border-stone-800 hover:bg-stone-800 hover:text-2xl hover:border-stone-900 border-stone-800 text-white">
							<input
								onClick={() => setDrawerOpen(!drawerOpen)}
								type="checkbox"
							/>
							<svg
								className="swap-off fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 512 512">
								<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
							</svg>
							<svg
								className="swap-on fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 512 512">
								<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
							</svg>
						</label>
					}
				/>
			</div>
			<div className="w-full h-full overflow-y-auto flex flex-row justify-around">
				<Drawer
					drawerOpen={drawerOpen}
					filter={filter}
					setFilter={setFilter}
				/>
				<ElementPaginator
					filter={filter}
					setIdCharacter={setIdCharacter}
				/>
			</div>
		</div>
	);
}

export default App;
