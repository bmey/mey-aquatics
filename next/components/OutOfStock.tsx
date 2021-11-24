import React from 'react'
import { isOutOfStock } from '../service/filter'
import { FishItem } from '../types'

type IProps = Pick<FishItem, 'sizes'>

const OutOfStock = ({ sizes }: IProps): JSX.Element => {
  if (!isOutOfStock(sizes)) {
    return null
  }
  return (
    <div
      className="p-1 px-2 text-white bg-complementary"
      style={{
        fontSize: '0.625rem',
        whiteSpace: 'nowrap',
        width: 'min-content',
        height: 'min-content',
        borderBottomRightRadius: '0.5rem',
      }}
    >
      Out of Stock
    </div>
  )
}

export default OutOfStock
