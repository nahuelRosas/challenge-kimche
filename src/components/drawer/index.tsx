export default function Drawer({
	drawerOpen,
	status,
	setStatus,
	gender,
	setGender,
}: {
	drawerOpen: boolean;
	status: string;
	setStatus: React.Dispatch<React.SetStateAction<string>>;
	gender: string;
	setGender: React.Dispatch<React.SetStateAction<string>>;
}) {
	return (
		<div
			className={`${
				drawerOpen ? 'visible' : 'hidden'
			} w-[20%] bg-stone-800 p-4`}>
			<h1 className="text-2xl font-bold text-center text-white">Filter by</h1>
			<div className="form-control">
				<span className="label-text text-lg">Status</span>
				<label className="cursor-pointer label">
					<span className="label-text text-md">Alive</span>
					<input
						type="checkbox"
						checked={status === 'alive'}
						onChange={() => setStatus(status === 'alive' ? '' : 'alive')}
						className="checkbox checkbox-success"
					/>
				</label>
				<label className="cursor-pointer label">
					<span className="label-text text-md">Dead</span>
					<input
						type="checkbox"
						checked={status === 'dead'}
						onChange={() => setStatus(status === 'dead' ? '' : 'dead')}
						className="checkbox checkbox-error"
					/>
				</label>
				<label className="cursor-pointer label">
					<span className="label-text text-md">Unknown</span>
					<input
						type="checkbox"
						checked={status === 'unknown'}
						onChange={() => setStatus(status === 'unknown' ? '' : 'unknown')}
						className="checkbox checkbox-warning"
					/>
				</label>
			</div>
			<div className="form-control">
				<span className="label-text text-lg">Gender</span>
				<label className="label cursor-pointer">
					<span className="label-text text-md">Male</span>
					<input
						type="checkbox"
						checked={gender === 'male'}
						onChange={() => setGender(gender === 'male' ? '' : 'male')}
						className="checkbox"
					/>
				</label>
				<label className="label cursor-pointer">
					<span className="label-text text-md">Female</span>
					<input
						type="checkbox"
						checked={gender === 'female'}
						onChange={() => setGender(gender === 'female' ? '' : 'female')}
						className="checkbox"
					/>
				</label>
				<label className="label cursor-pointer">
					<span className="label-text text-md">Genderless</span>
					<input
						type="checkbox"
						checked={gender === 'genderless'}
						onChange={() =>
							setGender(gender === 'genderless' ? '' : 'genderless')
						}
						className="checkbox"
					/>
				</label>
			</div>
		</div>
	);
}
