import './SearchBar.css'

import { FormEvent, memo, useEffect, useRef } from 'react'

import type { SearchBarProps } from './SearchBar.types'

export default memo(function SearchBar({
  className,
  onChange,
  onSubmit,
}: SearchBarProps) {
  // console.log('👷 rendering search bar 👷')

  // const inputRef = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   inputRef.current?.focus()
  // }, [])

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const search = event.currentTarget.search.value

    onSubmit?.(search)
  }

  function onChangeHandler(event: FormEvent<HTMLFormElement>) {
    const search = event.currentTarget.search.value

    onChange?.(search)
  }

  return (
    <form
      className={className}
      onSubmit={onSubmitHandler}
      onChange={onChangeHandler}
    >
      <div className="search-bar">
        <label>
          {!onSubmit && <span className="search-bar__label">Search</span>}

          <input
            // ref={inputRef}
            className="search-bar__input"
            autoComplete="off"
            type="text"
            name="search"
          />
        </label>

        <button className="search-bar__button" type="submit">
          Search
        </button>
      </div>
    </form>
  )
})
