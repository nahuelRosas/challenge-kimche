import ElementPaginator from './components/element-paginator';
import SearchBar from './components/search-bar';
import Drawer from './components/drawer';
import { useState } from 'react';

function App() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-stone-800 text-white">
			<div className="relative flex flex-row flex-wrap justify-around items-center top-0 left-0 navbar bg-stone-900 w-screen h-16 z-10">
				<SearchBar
					leftElement={
						<button
							onClick={() => setDrawerOpen(!drawerOpen)}
							className="join-item btn btn-square bg-stone-900 border-stone-800 hover:bg-stone-800 hover:text-2xl hover:border-stone-900 border-stone-800 text-white">
							<svg
								className="swap-off fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 512 512">
								<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
							</svg>
						</button>
					}
				/>
			</div>
			<div className="w-full h-full overflow-y-auto flex flex-row justify-around">
				<Drawer drawerOpen={drawerOpen} />
				<ElementPaginator />
			</div>
		</div>
	);
}

export default App;
