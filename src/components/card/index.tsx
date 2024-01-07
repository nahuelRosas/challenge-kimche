/**
 * Renders a card component displaying character information.
 * @param setIdCharacter - A function to set the ID of the selected character.
 * @param location - The last known location of the character.
 * @param species - The species of the character.
 * @param status - The status of the character.
 * @param gender - The gender of the character.
 * @param image - The URL of the character's image.
 * @param name - The name of the character.
 * @param type - The type of the character.
 * @param id - The ID of the character.
 * @returns The rendered card component.
 */

export default function Card({
	setIdCharacter,
	location,
	species,
	status,
	gender,
	image,
	name,
	type,
	id,
}: {
	setIdCharacter: React.Dispatch<React.SetStateAction<number | null>>;
	location: { name: string };
	species: string;
	status: string;
	gender: string;
	image: string;
	name: string;
	type: string;
	id: number;
}) {
	return (
		<div
			className="card w-70 bg-stone-900 shadow-xl hover:shadow-2xl cursor-pointer"
			onClick={() => setIdCharacter(id)}>
			<figure>
				<img
					className="object-cover pointer-events-none"
					src={image}
					alt={name}
				/>
			</figure>
			<div className="card-body w-70">
				<div className="flex flex-col flex-wrap gap-1">
					<span className="card-title text-pretty overflow-hidden">{name}</span>

					{status && (
						<div
							className={`badge
			${
				status === 'Dead'
					? 'badge-error'
					: status === 'Alive'
					? 'badge-success'
					: 'badge-warning'
			}`}>
							{status}
						</div>
					)}
				</div>
				<div className="flex flex-col flex-wrap w-full mt-3">
					<h3 className="text-base">Last known location:</h3>
					<p className="text-sm">{location.name}</p>
				</div>
				<div className="flex flex-row flex-wrap gap-2 mt-3 text-xs">
					<div className="flex items-center border border-white text-white px-2 py-1 rounded-full bg-transparent text-center">
						<p className={`${species.length > 20 ? 'marquee' : ''}`}>
							{species}
						</p>
					</div>
					<div className="flex items-center border border-white text-white px-2 py-1 rounded-full bg-transparent text-center">
						<p className={`${gender.length > 20 ? 'marquee' : ''}`}>{gender}</p>
					</div>
				</div>
				<div className="flex w-full">
					{type && (
						<div className="flex text-xs items-center border border-white text-white px-2 py-1 rounded-full bg-transparent text-center">
							<p className={`${type.length > 20 ? 'marquee' : ''}`}>{type}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
