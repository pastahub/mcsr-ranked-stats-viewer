const getMatches = async (player) => {
    let pageNumber = 0
    let finished = false
    let output = []
    while (!finished) {
        let res = await fetch(`https://mcsrranked.com/api/users/${player}/matches?page=${pageNumber}`)
        let dataJson = await res.json()
        let matches = dataJson.data
        if (matches.length == 0) {
            finished = true
        } else {
            output = output.concat(matches)
            pageNumber++
            console.log(`Fetched page ${pageNumber}`)
        }
    }
    return output
}

export default getMatches