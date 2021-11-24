import Head from 'next/head'
import Layout from '../components/Layout'
import React from 'react'
import { FishItem } from '../types'
import { GetStaticProps } from 'next'
import { getAllStockData } from '../lib/stock'
import Link from 'next/link'
import { getStockDetailRoute } from '../service/routes'

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
  <Layout>
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        live stock!
        {items.map((item) => (
          <Link href={getStockDetailRoute(item.id)} key={item.id}>
            <a>{item.common}</a>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
)

export default Livestock
