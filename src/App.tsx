import SearchBar from './components/search-bar';

function App() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-stone-800 text-white">
			<div className="fixed flex flex-row flex-wrap justify-center items-center top-0 left-0 navbar bg-stone-900 w-screen h-16">
				<SearchBar />
			</div>
		</div>
	);
}

export default App;
