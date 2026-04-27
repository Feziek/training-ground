import { useState } from "react"

import { Input, Button } from "@components"

export function Contact() {
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [ event.target.name ]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Submitted: ${ form }`)
  }

  const isDisabled = !form.name || !form.email || !form.message

  return (
    <div className="mt-25 px-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form 
        onSubmit={ handleSubmit } 
        className="space-y-4"
      >
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={ form.name }
          onChange={ handleChange } 
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={ form.email }
          onChange={ handleChange }
        />
        <div className="flex flex-col gap-1">
          <label className="p-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={ form.message }
            onChange={ handleChange }
            placeholder="Enter your message"
            className="px-4 py-2 rounded-xl border outline-none transition h-32"
          />
        </div>
        <Button
          type="submit"
          label="Send Message"
          isDisabled={ isDisabled }
          className="w-full"
        />
      </form>
    </div>
  )
}