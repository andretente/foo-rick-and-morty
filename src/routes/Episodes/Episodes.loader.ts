import { json } from 'react-router-dom'

import { episodesStore } from '../../store'

export default async function episodesLoader() {
  const storeepisodes = episodesStore.get()

  if (storeepisodes?.results.length) {
    return json(storeepisodes)
  } else {
    const episodes = await fetch('https://rickandmortyapi.com/api/episode')
    const episodesJson = await episodes.json()

    episodesStore.set(episodesJson)

    return json(episodesJson)
  }
}
