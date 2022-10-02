import { json } from 'react-router-dom'

import { charactersStore } from '../../store'

export default async function charactersLoader() {
  const storeCharacters = charactersStore.get()

  if (storeCharacters?.results.length) {
    return json(storeCharacters)
  } else {
    const characters = await fetch('https://rickandmortyapi.com/api/character')
    const charactersJson = await characters.json()

    charactersStore.set(charactersJson)

    return json(charactersJson)
  }
}
