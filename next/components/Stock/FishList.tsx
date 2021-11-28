import React from 'react'
import { FishItem } from '../../types'
import { Filter } from '../Filter/filters'
import filter from '../../service/filter'
import sort from '../../service/sort'
import FishCard from './FishCard'
import styles from './FishList.module.scss'

interface IProps {
  fish: FishItem[]
  appliedFilters: Filter[]
  appliedSortId: number
}

const FishList = ({
  fish,
  appliedFilters,
  appliedSortId,
}: IProps): JSX.Element => {
  const filteredList = filter(fish, appliedFilters)

  return (
    <div className={styles['card-list']}>
      {sort(filteredList, appliedSortId).map((item) => (
        <FishCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default FishList
