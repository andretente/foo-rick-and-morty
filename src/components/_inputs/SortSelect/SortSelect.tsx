import './SortSelect.css'

import classNames from 'classnames'

import type { SortSelectProps } from './SortSelect.types'

export default function SortSelect({ className, onChange }: SortSelectProps) {
  return (
    <select
      className={classNames('sort-select', className)}
      name="sorting"
      onChange={onChange}
    >
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </select>
  )
}
