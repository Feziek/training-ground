import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '@redux/store'

import { MainRoute } from '@routes/MainRoute'

describe('<RootApp />', () => {
  it('should render without errors', () => {
    render(
      <ReduxProvider store={ store }>
        <MainRoute />
      </ReduxProvider>
    )
  })
})
