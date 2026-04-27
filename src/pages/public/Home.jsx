import { Fragment, useCallback, useState } from "react"

import { useNavigate } from "react-router-dom"

import { SearchBar } from "@components"

import backgroundImg from "@assets/background.png"

export function Home() {
  const [ query, setQuery ] = useState("")
  const navigate = useNavigate()

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value)
  }, [])
  
  const handleSearch = useCallback((event) => {
    event.preventDefault()
    if (!query.trim()) return
    console.log(`Searching for : ${ query }`)
    navigate(`/products?search=${ encodeURIComponent(query) }`)
  }, [ navigate, query ])

  return (
    <Fragment>
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ backgroundImg })` }}
      >
        <div className="bg-black/50 w-full h-full absolute inset-0"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold mt-10 mb-4 text-white">Welcome</h1>
          <p className="text-gray-200 mb-6">Find what you need quickly and easily.</p>
          <div className="max-w-xl mx-auto">
            <SearchBar
              value={ query }
              onChange={ handleQueryChange}
              onSubmit={ handleSearch }
              placeholder="Search products..."
              className="text-white"
            />
          </div>
        </div>
      </section>
    </Fragment>
  ) 
}