import ElementPaginator from './components/element-paginator';
import SearchBar from './components/search-bar';
import Drawer from './components/drawer';
import { useState } from 'react';

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');

	return (
		<div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-stone-800 text-white">
			<div className="relative flex flex-row flex-wrap justify-around items-center top-0 left-0 navbar bg-stone-900 w-screen h-16 z-10">
				<SearchBar
					search={search}
					setSearch={setSearch}
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
					setStatus={setStatus}
					status={status}
					gender={gender}
					setGender={setGender}
				/>
				<ElementPaginator
					search={search}
					status={status}
					gender={gender}
				/>
			</div>
		</div>
	);
}

export default App;
