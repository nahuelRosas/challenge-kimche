import PaginationButtons from "../pagination-buttons";
import { useQuery, gql } from "@apollo/client";
import { Character } from "../../types";
import { useEffect, useState } from "react";
import Card from "../card";
/**
 * Renders a paginated list of characters based on the provided filter.
 * @param filter - The filter to apply to the characters.
 * @returns The ElementPaginator component.
 */

export default function ElementPaginator({
  filter,
  setIdCharacter,
}: {
  filter: Character;
  setIdCharacter: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [page, setPage] = useState(0);

  const GET_CHARACTERS = gql`
    query GetCharacters($page: Int!, $filter: FilterCharacter) {
      characters(page: $page, filter: $filter) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          image
          gender
          species
          status
          type
          location {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      filter,
    },
  });

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <div className="flex flex-col min-w-[80dvw] h-full justify-center align-center bg-stone-700">
      <div className="min-w-[80dvw] py-2 h-[100%] overflow-y-auto flex flex-row flex-wrap justify-around gap-4 m-2">
        {data &&
          data.characters.results.map(
            (character: {
              gender: string;
              id: number;
              image: string;
              location: { name: string };
              name: string;
              species: string;
              status: string;
              type: string;
            }) => (
              <Card
                key={character.id}
                gender={character.gender}
                id={character.id}
                image={character.image}
                location={character.location}
                name={character.name}
                setIdCharacter={setIdCharacter}
                species={character.species}
                status={character.status}
                type={character.type}
              />
            )
          )}
        {loading && (
          <span className="p-6 my-10 loading loading-spinner text-accent" />
        )}

        {data && !data.characters.info.count && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-2xl font-bold">No results found</span>
          </div>
        )}

        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              {error.message || "We have a problem, please try again later."}
            </span>
          </div>
        )}
      </div>
      {data && data.characters.info.count > 0 && (
        <PaginationButtons
          currentPage={page}
          totalPages={data?.characters.info.pages}
          onClick={setPage}
        />
      )}
    </div>
  );
}
