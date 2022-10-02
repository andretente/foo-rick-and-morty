import { CSSProperties } from 'react'

export interface GenericCardProps {
  className?: string
  imageSrc?: string
  name?: string
  style?: CSSProperties
  to: string
}
