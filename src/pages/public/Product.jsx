import { useCallback } from "react"

import { useLocation, useNavigate } from "react-router-dom"

import { Button, SearchBar } from "@components"

import coffee from "@assets/products/coffee.png"
import camera from "@assets/products/camera.png"
import watch from "@assets/products/watch.png"
import headphone from "@assets/products/headphone.png"
import laptop from "@assets/products/laptop.png"
import sneakers from "@assets/products/sneaker.png"

export function Products() {

  const location = useLocation()
  const navigate = useNavigate()

  const params = new URLSearchParams(location.search)
  const search = params.get("search") || ""

  const products = [
    {
      id: 1,
      name: "Coffee",
      description: "Freshly brewed premium coffee.",
      price: 10,
      image: coffee 
    },
    {
      id: 2,
      name: "Watch",
      description: "Elegant and durable wrist watch.",
      price: 20,
      image: watch
    },
    {
      id: 3,
      name: "Camera",
      description: "Capture moments in high quality.",
      price: 30,
      image: camera
    },
    {
      id: 4,
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      price: 40,
      image: headphone
    },
    {
      id: 5,
      name: "Laptop",
      description: "Lightweight laptop for work and study.",
      price: 800,
      image: laptop
    },
    {
      id: 6,
      name: "Sneakers",
      description: "Comfortable everyday casual shoes.",
      price: 60,
      image: sneakers
    }
  ]

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearchChange = useCallback((event) => {
    const value = event.target.value
    navigate(`?search=${ encodeURIComponent(value) }`)
  }, [ navigate ])

  const handleAlert = useCallback((product) => {
    alert(`Added: ${ product.name }`)
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(`Searching for : ${ search }`)
  }

  return (
    <div className="mt-25 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Products</h1>
      <div className="max-w-md mx-auto mb-8">
        <SearchBar
          value={ search }
          onChange={ handleSearchChange }
          onSubmit={ handleSearch }
          placeholder="Search products..."
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        { filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={ product.id }
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={ product.image }
                alt={ product.name }
                className="h-40 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{ product.name }</h2>
                <p className="text-gray-600 mb-4">{ product.description }</p>
                <p className="text-gray-600 mb-4">Price: ${ product.price }</p>
                <Button
                  label="Add to Cart"
                  onClick={ () => handleAlert(product) }
                  className="w-full"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  )
}