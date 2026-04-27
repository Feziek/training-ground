import { useState, useCallback } from "react"
import { Link } from "react-router-dom"

import { Input, Button } from "@components"

export function Register() {
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = useCallback((event) => {
    setForm({
      ...form,
      [ event.target.name ]: event.target.value,
    })
  }, [ form ])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    console.log(`Register: ${ form }`)
  }, [ form ])

  const isDisabled = !form.name || !form.email || !form.password

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={ handleSubmit }
        className="w-full max-w-md border rounded-xl p-6 shadow"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter name"
          value={ form.name }
          onChange={ handleChange }
        />

        <div className="mt-4">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={ form.email }
            onChange={ handleChange }
          />
        </div>
        <div className="mt-4">
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={ form.password }
            onChange={ handleChange }
          />
        </div>
        <Button
          label="Create Account"
          type="submit"
          className="w-full mt-6"
          isDisabled={ isDisabled }
        />
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link
            to="/log-in"
            className="text-gray-800 hover:underline pl-1"
          >
            LogIn
          </Link>
        </p>
      </form>
    </div>
  )
}