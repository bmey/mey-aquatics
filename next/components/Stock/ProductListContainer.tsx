import React from 'react'
import { FishItem } from '../../types'
import FilterContext from '../Filter/FilterContext'
import FishList from './FishList'

interface IProps {
  fish: FishItem[]
}

const ProductListContainer = (props: IProps): JSX.Element => {
  return (
    <FilterContext.Consumer>
      {({ filters, sort }) => (
        <FishList {...props} appliedFilters={filters} appliedSortId={sort} />
      )}
    </FilterContext.Consumer>
  )
}

export default ProductListContainer
