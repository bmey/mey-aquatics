import {
  Queries,
  queries,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'

const Providers = ({ children }) => {
  return children
}

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: React.ReactElement,
  options: RenderOptions<Q, Container>
): RenderResult<Q, Container> => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
