import React, { PropsWithChildren } from 'react'
import SearchContainer from '../Filter/SearchContainer'
import { FilterProvider } from '../Filter/FilterContext'
import styles from './LivestockPage.module.scss'
import Layout from '../Layout'

const LivestockPage = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <Layout>
    <FilterProvider>
      <div data-cy="livestockpage" className="mb-3">
        <h1 className="a11y-offscreen">Live Stock</h1>
        <div className={styles.search}>
          <SearchContainer />
        </div>
        {children}
      </div>
    </FilterProvider>
  </Layout>
)

export default LivestockPage
