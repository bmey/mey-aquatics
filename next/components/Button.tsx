import { ComponentProps } from 'react'
import { Button as ReactstrapButton } from 'reactstrap'

export const Button = (
  props: ComponentProps<typeof ReactstrapButton>
): JSX.Element => {
  return <ReactstrapButton {...props} />
}
