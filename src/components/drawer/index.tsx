import { Character } from '../../types';

export default function Drawer({
	drawerOpen,
	filter,
	setFilter,
}: {
	drawerOpen: boolean;
	filter: Character;
	setFilter: React.Dispatch<React.SetStateAction<Character>>;
}) {
	return (
		<div
			className={`${
				drawerOpen ? 'visible' : 'hidden'
			} w-[auto] bg-stone-900 p-4 gap-4 flex flex-col`}>
			<h1 className="text-2xl font-bold text-center text-white">Filter by</h1>
			<div className="form-control">
				<span className="label-text text-lg mb-3">Type</span>
				<input
					type="text"
					id="search-bar-type"
					value={filter['type']}
					onChange={(e) =>
						setFilter((prev) => ({
							...prev,
							['type']: e.target.value,
						}))
					}
					placeholder="using Type, search your favorite character"
					className="input input-bordered text-white w-screen text-xs w-[100%] bg-stone-900 px-5"
				/>
			</div>
			<div className="form-control">
				<span className="label-text text-lg mb-3">Status</span>
				<select
					id="status"
					className="select select-success w-full max-w-xs"
					onChange={(e) =>
						setFilter((prev) => {
							if (e.target.value === 'All') return { ...prev, status: '' };
							const _status = e.target.value as Character['status'];
							return { ...prev, status: _status };
						})
					}>
					<option>All</option>
					<option>Alive</option>
					<option>Dead</option>
					<option>Unknown</option>
				</select>
			</div>
			<div className="form-control">
				<span className="label-text text-lg mb-3">Gender</span>
				<select
					id="gender"
					className="select select-info w-full max-w-xs"
					onChange={(e) =>
						setFilter((prev) => {
							if (e.target.value === 'All') return { ...prev, gender: '' };
							const _status = e.target.value as Character['gender'];
							return { ...prev, gender: _status };
						})
					}>
					<option>All</option>
					<option>Male</option>
					<option>Female</option>
					<option>Genderless</option>
					<option>Unknown</option>
				</select>
			</div>
			<div className="form-control">
				<span className="label-text text-lg mb-3">Gender</span>
				<select
					id="species"
					className="select select-error w-full max-w-xs"
					onChange={(e) =>
						setFilter((prev) => {
							if (e.target.value === 'All') return { ...prev, species: '' };
							const _status = e.target.value as Character['species'];
							return { ...prev, species: _status };
						})
					}>
					<option>All</option>
					<option>Human</option>
					<option>Alien</option>
					<option>Humanoid</option>
					<option>Unknown</option>
					<option>Mythological Creature</option>
					<option>Poopybutthole</option>
					<option>Animal</option>
					<option>Robot</option>
					<option>Cronenberg</option>
					<option>Disease</option>
				</select>
			</div>
		</div>
	);
}
