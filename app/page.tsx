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
 const res = await fetch(
 'http://cs-vm-02.cs.mtholyoke.edu:31600/api')
 if (!res.ok) {
 throw new Error('Failed to fetch data')
 }
 return res.json()
}