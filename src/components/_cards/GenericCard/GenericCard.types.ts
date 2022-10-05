import { CSSProperties } from 'react'

export interface GenericCardProps {
  className?: string
  id?: string
  imageSrc?: string
  name?: string
  style?: CSSProperties
  to: string
}
