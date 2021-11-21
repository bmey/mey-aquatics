import Layout from '../../components/Layout'
import { getAllStockIds, getStockData } from '../../lib/stock'
import Head from 'next/head'
import { FishItem } from '../../types'
import {
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IProps {
  item: FishItem
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<IProps> = async ({
  params,
}: GetStaticPropsContext<Params>) => {
  const item = await getStockData(params.id)
  return {
    props: {
      item,
    },
  }
}

export default function StockDetails({ item }: IProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{item.common}</title>
      </Head>
      <main>
        <h1 className="text-xl">{item.common}</h1>
        <div className="text-gray-300">{item.scientific}</div>
      </main>
    </Layout>
  )
}

export const getStaticPaths = (): GetStaticPathsResult => {
  const paths = getAllStockIds().map((id) => ({ params: { id } }))
  return {
    paths,
    fallback: false,
  }
}
