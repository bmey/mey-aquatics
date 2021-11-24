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
import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import ProductDetails from '../../components/Stock/ProductDetails'

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
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>{item.common}</title>
      </Head>
      <div className="App-content container py-10">
        <div>
          <Button
            onClick={() => router.back()}
            size="sm"
            outline
            color="secondary"
          >
            &lt; Go Back
          </Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <ProductDetails {...item} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = (): GetStaticPathsResult => {
  const paths = getAllStockIds().map((id) => ({
    params: { id: id.toUpperCase() },
  }))
  return {
    paths,
    fallback: false,
  }
}
