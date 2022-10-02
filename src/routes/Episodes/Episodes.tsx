import { useLoaderData } from 'react-router-dom'

import CardGrid from '../../components/_cards/CardGrid'
import GenericCard from '../../components/_cards/GenericCard'
import type { EpisodesTypes } from './Episodes.types'

export default function Episodes() {
  const data = useLoaderData() as EpisodesTypes // Check this types

  return (
    <CardGrid>
      {data?.results.map((character, index) => {
        return (
          <GenericCard
            key={character.id}
            imageSrc={character.image}
            name={character.name}
            style={{ animationDelay: `${index * 0.05}s` }}
            to={`/episodes/${character.id}`}
          />
        )
      })}
    </CardGrid>
  )
}
