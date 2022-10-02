export async function getCharacters() {
  const charactersData = await fetch(
    'https://rickandmortyapi.com/api/character'
  )
  const characters = await charactersData.json()

  return characters
}

export async function getEpisodes() {
  const episodesData = await fetch('https://rickandmortyapi.com/api/episode')
  const episodes = await episodesData.json()

  return episodes
}

export async function getCharactersSlowly() {
  const slowFetch = () =>
    new Promise((resolve) => {
      setTimeout(async () => {
        const data = await getCharacters()
        resolve(data)
      }, 5000)
    })

  return await slowFetch()
}
