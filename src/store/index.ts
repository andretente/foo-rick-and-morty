import { atom } from 'nanostores'

import {
  CharactersResponse,
  EpisodesResponse,
} from '../@types/rick-morty.types'

export const charactersStore = atom<CharactersResponse | null>(null)

export const episodesStore = atom<EpisodesResponse | null>(null)
