import '@styles/global.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { MainRoute } from '@routes/MainRoute'

import { store } from '@redux/store'

const htmlRootElement = createRoot(document.getElementById('root'))

htmlRootElement.render(
  <StrictMode>
    <Provider store={ store }>
      <MainRoute />
    </Provider>
  </StrictMode>
)