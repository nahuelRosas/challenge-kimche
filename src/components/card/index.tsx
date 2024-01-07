/**
 * Renders a card component for a character.
 * @param character - The character object containing the following properties:
 *   - image: The URL of the character's image.
 *   - name: The name of the character.
 *   - status: The status of the character (e.g., "Alive", "Dead").
 *   - species: The species of the character.
 *   - gender: The gender of the character.
 *   - type: The type of the character.
 *   - location: An object representing the character's last known location, with a "name" property.
 * @returns The rendered card component.
 */

export default function Card(character: {
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
	type: string;
	location: { name: string };
}) {
	return (
		<div className="card w-70 bg-stone-900 shadow-xl ">
			<figure>
				<img
					className="object-cover pointer-events-none"
					src={character.image}
					alt={character.name}
				/>
			</figure>
			<div className="card-body w-70">
				<div className="flex flex-col flex-wrap gap-1">
					<span className="card-title text-pretty overflow-hidden">
						{character.name}
					</span>

					{character.status && (
						<div
							className={`badge
			${
				character.status === 'Dead'
					? 'badge-error'
					: character.status === 'Alive'
					? 'badge-success'
					: 'badge-warning'
			}`}>
							{character.status}
						</div>
					)}
				</div>
				<div className="flex flex-col flex-wrap w-full mt-3">
					<h3 className="text-base">Last known location:</h3>
					<p className="text-sm">{character.location.name}</p>
				</div>
				<div className="flex flex-row flex-wrap gap-2 mt-3 text-xs">
					<div className="flex items-center border border-white text-white px-2 py-1 rounded-full bg-transparent text-center">
						<p className={`${character.species.length > 20 ? 'marquee' : ''}`}>
							{character.species}
						</p>
					</div>
					<div className="flex items-center border border-white text-white px-2 py-1 rounded-full bg-transparent text-center">
						<p className={`${character.gender.length > 20 ? 'marquee' : ''}`}>
							{character.gender}
						</p>
					</div>
				</div>
				<div className="flex w-full">
					{character.type && (
						<div className="flex text-xs items-center border border-white text-white px-2 py-1 rounded-full bg-transparent text-center">
							<p className={`${character.type.length > 20 ? 'marquee' : ''}`}>
								{character.type}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
