import { Fragment } from "react"

import { Outlet, useNavigate } from "react-router-dom"

import { NavigationBar, Footer } from "@components"

import { publicRoute, privateRoute } from "@routes/paths"

import shop from "@assets/shop.png"

export function PublicRoot() {
  const navigate = useNavigate()

  const handleNavClick = (link) => {
    navigate(link.path)
  }

  return (
     <div className="min-h-screen flex flex-col">
      
      <NavigationBar
        logo={
          <img
            src={ shop }
            alt="logo"
            className="h-15 w-auto object-contain text-gray-500"
          />
        }
        links={[
          { label: "Home", path: publicRoute.pages.ROOT },
          { label: "Products", path: publicRoute.pages.PRODUCTS },
          { label: "Contact", path: publicRoute.pages.CONTACT },
          { label: "Tools", path: privateRoute.TOOLS },
          { label: "Dashboard", path: privateRoute.DASHBOARD },
        ]}
        onLinkClick={ handleNavClick }
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}