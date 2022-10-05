import './SortSelect.css'

import type { SortSelectProps } from './SortSelect.types'

export default function SortSelect({ className, onChange }: SortSelectProps) {
  return (
    <label className={className}>
      <span className="sort-select__label">Sort:</span>

      <select className="sort-select" name="sorting" onChange={onChange}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </label>
  )
}
