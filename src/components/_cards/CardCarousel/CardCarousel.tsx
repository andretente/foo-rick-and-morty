import './CardCarousel.css'

import { Children, cloneElement, isValidElement, ReactElement } from 'react'

import type { CardCarouselProps } from './CardCarousel.types'

export default function CardCarousel({ children }: CardCarouselProps) {
  return (
    <div className="card-carousel">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement, {
            ...child?.props,
            className: 'card-carousel__item',
          })
        }
      })}
    </div>
  )
}
