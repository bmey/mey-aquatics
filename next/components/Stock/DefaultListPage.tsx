import React from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap'
import FishList from './ProductListContainer'
import Filter from '../Filter/FilterContainer'
import ResultsContainer from '../Filter/ResultsContainer'
import styles from './DefaultListPage.module.scss'
import { FishItem } from '../../types'

interface IProps {
  fish: FishItem[]
}

const DefaultListPage = ({ fish }: IProps): JSX.Element => (
  <div className={styles['livestock-list-page']}>
    <div className={styles['results']}>
      <ResultsContainer fish={fish} />
    </div>
    <div className={styles['filter']}>
      <div className="md:hidden">
        <div className="d-flex justify-content-end">
          <Link href="/stockfilter">
            <a>
              <Button
                id="filter-button"
                type="button"
                outline
                data-test="filter-button"
              >
                Filter
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <Filter />
      </div>
    </div>
    <div className={styles['data']}>
      <FishList fish={fish} />
    </div>
  </div>
)

export default DefaultListPage
