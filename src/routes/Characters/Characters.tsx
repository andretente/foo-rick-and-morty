import './characters.css'

import CardGrid, { CardGridItem } from '@components/_cards/CardGrid'
import GenericCard from '@components/_cards/GenericCard'
import { useCallback, useMemo, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import type { CharactersTypes } from './Characters.types'
import ControlsBar from './components/ControlsBar'

export default function Characters() {
  // Doesn't seem like useLoaderData accepts generics so we have to cast it
  const data = useLoaderData() as CharactersTypes

  const [sort, setSort] = useState<'a-z' | 'z-a'>('a-z')
  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  // ! WARNING: This is a very contrived, useCallback added for demo purposes
  const updateSearchValue = useCallback((value: string) => {
    setCurrentSearchValue(value)
  }, [])

  // ! WARNING: This is a very contrived, useCallback added for demo purposes
  const executeSearch = useCallback(() => {
    setSearchValue(currentSearchValue)
  }, [currentSearchValue])

  const updateSort = (value: string) => {
    setSort(value as 'a-z' | 'z-a')
  }

  // ! WARNING: This is a very contrived, useMemo added for demo purposes
  const filteredCharacters = useMemo(
    () =>
      data?.results.filter((character) => {
        return character.name.toLowerCase().includes(searchValue.toLowerCase())
      }),
    [data?.results, searchValue]
  )

  sort === 'a-z'
    ? filteredCharacters?.sort((a, b) => a.name.localeCompare(b.name))
    : filteredCharacters?.sort((a, b) => b.name.localeCompare(a.name))

  return (
    <>
      <ControlsBar
        onChangeSearch={updateSearchValue}
        onSubmitSearch={executeSearch}
        onChangeSort={updateSort}
      />

      <CardGrid as="ul">
        {filteredCharacters.map((character, index) => {
          return (
            <CardGridItem key={character.id} as="li">
              <Link
                className="characters__link"
                style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
                to={`/characters/${character.id}`}
              >
                <GenericCard
                  as="span"
                  imageSrc={character.image}
                  name={character.name}
                />
              </Link>
            </CardGridItem>
          )
        })}
      </CardGrid>
    </>
  )
}
