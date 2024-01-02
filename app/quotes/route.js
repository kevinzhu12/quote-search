import list from './list.json'
import Fuse from 'fuse.js'

export async function POST(request) {
    const body = await request.json();
    // Log the body to the server console
    console.log(body);
    console.log(list[0])
    const input = body.input
    const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            "title",
            "author",
            "category"
        ]
    };

    let fuse = new Fuse(list, fuseOptions)
    const results = fuse.search(input, { limit: 10 })
    // console.log({ results });

    const tempQuotes = results.map(res => res.item)
    // console.log({ tempQuotes })

    return Response.json({ quotes: tempQuotes })
}