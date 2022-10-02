import './Character.css'

import { useLoaderData } from 'react-router-dom'

import { CharacterTypes } from '../../../@types/rick-morty.types'
import BaseImage from '../../../components/_images/BaseImage'

export default function Character() {
  const data = useLoaderData() as CharacterTypes

  return (
    <div className="character__card">
      <h2>{data.name}</h2>

      <BaseImage
        alt={`thumbnail of the character${data.name}`}
        className="character__image"
        height={300}
        width={300}
        src={data.image}
      />

      <ul className="character__details">
        <li>Species: {data.species}</li>
        <li>Status: {data.status}</li>
        <li>Origin: {data.origin.name}</li>
      </ul>
    </div>
  )
}
