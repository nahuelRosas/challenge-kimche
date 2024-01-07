import { Character } from '../../types';

/**
 * Renders a Drawer component that allows filtering characters based on type, status, gender, and species.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.drawerOpen - Indicates whether the drawer is open or closed.
 * @param {React.Dispatch<React.SetStateAction<Character>>} props.setFilter - The function to update the filter state.
 * @param {Character} props.filter - The current filter state.
 * @returns {JSX.Element} The rendered Drawer component.
 */
export default function Drawer({
	drawerOpen,
	setFilter,
	filter,
}: {
	setFilter: React.Dispatch<React.SetStateAction<Character>>;
	drawerOpen: boolean;
	filter: Character;
}) {
	return (
		<div
			className={`overflow-hidden md:relative p-5 bg-stone-900 fixed left-0 z-10 w-screen h-screen md:w-auto 
			${drawerOpen ? 'visible' : 'hidden'} `}>
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
					className="input input-bordered text-white w-screen text-sm w-[100%] bg-stone-900 px-5"
					placeholder="Search by type"
				/>
			</div>
			<div className="form-control">
				<span className="label-text text-lg mb-3">Status</span>
				<select
					id="status"
					className="select select-success w-full"
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
					className="select select-info w-full"
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
					className="select select-error w-full"
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
