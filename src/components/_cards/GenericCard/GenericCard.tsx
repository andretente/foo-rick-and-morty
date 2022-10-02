import './GenericCard.css'

import classNamesHelper from 'classnames'
import { Link } from 'react-router-dom'

import BaseImage from '../../_images/BaseImage'
import type { GenericCardProps } from './GenericCard.types'

export default function GenericCard({
  className,
  imageSrc,
  name,
  style,
  to,
}: GenericCardProps) {
  return (
    <div className={classNamesHelper('generic-card', className)} style={style}>
      <BaseImage height={200} src={imageSrc} width={200} />

      <h2 className="generic-card__content-title">{name}</h2>

      <Link className="generic-card__link" to={to} />
    </div>
  )
}
