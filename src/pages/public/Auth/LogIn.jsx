import { useState, useCallback } from "react"

import { Link } from "react-router-dom"

import { Input, Button } from "@components"

export function LogIn() {
  const [ form, setForm ] = useState({
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
    console.log(`Login: ${ form }`)
  }, [ form ])

  const isDisabled = !form.email || !form.password

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={ handleSubmit }
        className="w-full max-w-md border rounded-xl p-6 shadow"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={ form.email }
          onChange={ handleChange }
        />
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
          label="Login"
          type="submit"
          className="w-full mt-6"
          isDisabled={ isDisabled }
        />
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?
          <Link
            to="/register"
            className="text-gray-800 hover:underline pl-1"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}