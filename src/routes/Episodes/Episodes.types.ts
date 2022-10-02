import { InfoTypes } from '../../@types/rick-morty.types'
import { EpisodeTypes } from './../../@types/rick-morty.types'

export interface EpisodesProps {}

export interface EpisodesTypes {
  info: InfoTypes
  results: EpisodeTypes[]
}
