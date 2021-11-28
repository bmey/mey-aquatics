import { GetStaticProps } from 'next'
import React from 'react'
import DefaultListPage from '../components/Stock/DefaultListPage'
import StockLayout from '../components/Stock/StockLayout'
import { getAllStockData } from '../lib/stock'
import { FishItem } from '../types'

interface IProps {
  items: FishItem[]
}

export const getStaticProps: GetStaticProps<IProps> = () => {
  const items = getAllStockData()
  return {
    props: {
      items,
    },
  }
}

const Livestock = ({ items }: IProps): JSX.Element => (
  <StockLayout>
    <DefaultListPage fish={items} />
  </StockLayout>
)

export default Livestock
