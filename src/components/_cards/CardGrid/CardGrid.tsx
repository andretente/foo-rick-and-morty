import './CardGrid.css'

// import { useEffect, useRef } from 'react'
import type { CardGridProps } from './CardGrid.types'

export default function CardGrid({ children }: CardGridProps) {
  // const gridRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const firstChild = gridRef.current?.firstElementChild
  //   const firstChildLink = firstChild?.getElementsByTagName('a')[0]

  //   if (firstChildLink) {
  //     firstChildLink.focus()
  //   }
  // }, [])

  return <div className="card-grid">{children}</div>
}
