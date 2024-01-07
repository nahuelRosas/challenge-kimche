import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
	query getAlltype($page: Int!, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
			info {
				count
				pages
				next
				prev
			}
			results {
				type
			}
		}
	}
`;

/**
 * Retrieves all types of characters from the server using ApolloClient. DEV TOOL ONLY
 * @param client The ApolloClient instance used to make the query.
 * @returns An array of unique character types.
 */
export async function GetAlltype(client: ApolloClient<NormalizedCacheObject>) {
	const type = new Set();
	let currentPage = 1;

	while (currentPage <= 42) {
		const { loading, data, error } = await client.query({
			query: GET_CHARACTERS,
			variables: { page: currentPage },
		});

		if (error) {
			console.error('Error fetching type:', error);
			break;
		}

		if (loading) {
			continue;
		}

		for (const result of data.characters.results) {
			type.add(result.type);
		}

		if (!data.characters.info.next) {
			break;
		}
		console.log(type);
		currentPage++;
	}
	const uniquetype = Array.from(type);
	return uniquetype;
}
