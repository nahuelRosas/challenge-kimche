import ElementPaginator from "./components/element-paginator";
import SearchBar from "./components/search-bar";
import { useEffect, useState } from "react";
import Drawer from "./components/drawer";
import Modal from "./components/modal";
import { Character } from "./types";
/**
 * Renders the main application component.
 * @returns The JSX element representing the App component.
 */

export default function App() {
  const [idCharacter, setIdCharacter] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filter, setFilter] = useState<Character>({
    species: "",
    status: "",
    gender: "",
    name: "",
    type: "",
  });

  useEffect(() => {
    if (idCharacter) {
      setModalOpen(true);
    }
  }, [idCharacter]);

  return (
    <div className="flex flex-col items-center justify-center w-[100dvw] h-[100dvh] bg-stone-800 text-white overflow-hidden">
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        idCharacter={idCharacter}
        setIdCharacter={setIdCharacter}
      />
      <div className="relative flex flex-row flex-wrap justify-around items-center top-0 left-0 navbar bg-stone-900 w-screen h-16">
        <SearchBar
          filter={filter}
          setFilter={setFilter}
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
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          }
        />
      </div>
      <div className="w-full h-full overflow-y-auto flex flex-row justify-around">
        <Drawer drawerOpen={drawerOpen} filter={filter} setFilter={setFilter} />
        <ElementPaginator filter={filter} setIdCharacter={setIdCharacter} />
      </div>
    </div>
  );
}
