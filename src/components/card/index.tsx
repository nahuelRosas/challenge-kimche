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
		<div className="card w-[90dvw] bg-stone-900 shadow-xl h-[70dvh] cursor-pointer select-none md:max-w-[20dvw]">
			<figure>
				<img
					className="h-full w-full object-cover pointer-events-none"
					src={character.image}
					alt={character.name}
				/>
			</figure>
			<div className="card-body flex justify-end px-2 md:py-2 md:gap-1">
				<div className="flex flex-row flex-wrap gap-2 justify-between items-center w-full">
					<h2 className="card-title text-4xl md:text-base">{character.name}</h2>
					{character.status && (
						<div
							className={`badge
															${
																character.status === 'Dead'
																	? 'badge-error'
																	: character.status === 'Alive'
																	? 'badge-success'
																	: 'badge-warning'
															} text-2xl p-4 md:text-xs md:p-2`}>
							{character.status}
						</div>
					)}
				</div>
				<div className="flex flex-col mt-3">
					<h3 className="text-2xl md:text-xs">Last known location:</h3>
					<p className="text-2xl md:text-xs">{character.location.name}</p>
				</div>
				<div className="flex flex-row flex-wrap gap-2 mt-3 ">
					<div className="badge badge-outline text-2xl p-4 md:text-xs md:p-2">
						{character.species}
					</div>
					<div className="badge badge-outline text-2xl p-4 md:text-xs md:p-2">
						{character.gender}
					</div>
					{character.type && (
						<div className="badge badge-outline text-2xl p-4 md:text-xs md:p-2">
							{character.type}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
