import { Character } from "../../types";

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
}): JSX.Element {
  return (
    <div
      className={`overflow-hidden md:relative p-5 bg-stone-900 fixed left-0 z-10 w-screen h-full md:w-auto flex flex-col gap-2 min-w-80 
			${drawerOpen ? "visible" : "hidden"} `}
    >
      <h1 className="font-bold text-center text-white text-md">Filter by</h1>
      <div className="form-control">
        <span className="mb-1 text-lg label-text">Type</span>
        <input
          type="text"
          id="search-bar-type"
          value={filter["type"]}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              ["type"]: e.target.value,
            }))
          }
          className="w-full text-white input input-bordered bg-stone-800 border-stone-800 hover:border-stone-900 hover:bg-stone-900"
          placeholder="Search by type"
        />
      </div>
      <div className="form-control">
        <span className="mb-1 text-lg label-text">Status</span>
        <select
          id="status"
          className="w-full select select-success bg-stone-800 border-stone-800 hover:border-stone-900 hover:bg-stone-900"
          value={filter["status"] ? filter["status"] : "All"}
          onChange={(e) =>
            setFilter((prev) => {
              if (e.target.value === "All") return { ...prev, status: "" };
              const _status = e.target.value as Character["status"];
              return { ...prev, status: _status };
            })
          }
        >
          <option>All</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>Unknown</option>
        </select>
      </div>
      <div className="form-control">
        <span className="mb-1 text-lg label-text">Gender</span>
        <select
          id="gender"
          value={filter["gender"] ? filter["gender"] : "All"}
          className="w-full select select-info bg-stone-800 border-stone-800 hover:border-stone-900 hover:bg-stone-900"
          onChange={(e) =>
            setFilter((prev) => {
              if (e.target.value === "All") return { ...prev, gender: "" };
              const _status = e.target.value as Character["gender"];
              return { ...prev, gender: _status };
            })
          }
        >
          <option>All</option>
          <option>Male</option>
          <option>Female</option>
          <option>Genderless</option>
          <option>Unknown</option>
        </select>
      </div>
      <div className="form-control">
        <span className="mb-1 text-lg label-text">Species</span>
        <select
          id="species"
          className="w-full select select-error bg-stone-800 border-stone-800 hover:border-stone-900 hover:bg-stone-900"
          value={filter["species"] ? filter["species"] : "All"}
          onChange={(e) =>
            setFilter((prev) => {
              if (e.target.value === "All") return { ...prev, species: "" };
              const _status = e.target.value as Character["species"];
              return { ...prev, species: _status };
            })
          }
        >
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
      <button
        className="w-full btn btn-outline btn-secondary"
        onClick={() => {
          setFilter({
            gender: "",
            species: "",
            name: "",
            status: "",
            type: "",
          });
        }}
      >
        RESET FILTERS
      </button>
      <div className="flex flex-row items-center justify-center">
        <span className="mb-3 text-sm text-center label-text">
          Design by Nahuel Rosas Using{" "}
          <a
            className="text-blue-500 hover:text-blue-600"
            href="https://rickandmortyapi.com/"
          >
            Rick and Morty API
          </a>
        </span>
      </div>
    </div>
  );
}
