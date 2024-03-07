export default function Page() {
	return (
		<HelloWorld />
);
}

  function HelloWorld() {
  return (
	<h1>Hello! World</h1>
  );
}
// Avoid caching, so that hot updates work as expected
export const dynamic = 'force-dynamic'
// Get the language data from the database.
// Returns a json object.
async function getData() {
    try {
        const res = await fetch(
			// 'http://cs-vm-02.cs.mtholyoke.edu:31600/api'
			'http://localhost:31600/api'
			);
        console.log('Frontend Fetch: Response status:', res.status);
        const data = await res.json();
        console.log('Frontend Fetch: Data from server:', data);
        return data;
    } catch (error) {
        console.error('Frontend Fetch: Error fetching data:', error);
        throw error;
    }
}
