import './card-grid-item.css'

import classNames from 'classnames'

import type { CardGridItemProps } from './CardGridItem.types'

export default function CardGridItem({
  as = 'div',
  children,
  className,
}: CardGridItemProps) {
  const Component = as

  return (
    <Component className={classNames('card-grid-item', className)}>
      {children}
    </Component>
  )
}
