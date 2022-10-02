import './characters.css'

import { ChangeEvent, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import CardGrid from '../../components/_cards/CardGrid'
import GenericCard from '../../components/_cards/GenericCard'
import SearchBar from '../../components/_inputs/SearchBar'
import SortSelect from '../../components/_inputs/SortSelect'
import type { CharactersTypes } from './Characters.types'

export default function Characters() {
  const data = useLoaderData() as CharactersTypes // Check this types

  const [sort, setSort] = useState<'a-z' | 'z-a'>('a-z')
  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  // ! useCallbacks
  const updateSearchValue = (value: string) => {
    setCurrentSearchValue(value)
  }

  const executeSearch = () => {
    setSearchValue(currentSearchValue)
  }

  // ! useMemo
  const filteredCharacters = data?.results.filter((character) => {
    return character.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  sort === 'a-z'
    ? filteredCharacters?.sort((a, b) => a.name.localeCompare(b.name))
    : filteredCharacters?.sort((a, b) => b.name.localeCompare(a.name))

  return (
    <>
      <div className="characters__controls">
        <SearchBar
          className="characters__search-bar"
          onChange={updateSearchValue}
          onSubmit={executeSearch}
        />

        <SortSelect
          className="characters__sort-select"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setSort(event.currentTarget.value as 'a-z' | 'z-a')
          }}
        />
      </div>

      <CardGrid>
        {filteredCharacters.map((character, index) => {
          return (
            <GenericCard
              key={character.id}
              imageSrc={character.image}
              name={character.name}
              style={{ animationDelay: `${index * 0.05}s` }}
              to={`/characters/${character.id}`}
            />
          )
        })}
      </CardGrid>
    </>
  )
}
