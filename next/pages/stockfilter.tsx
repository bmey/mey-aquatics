import { Button } from 'reactstrap'
import Filter from '../components/Filter/FilterContainer'
import ResultsContainer from '../components/Filter/ResultsContainer'
import styles from './stockFilter.module.scss'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
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

const MobileFilter = ({ items }: IProps): JSX.Element => {
  const router = useRouter()
  return (
    <StockLayout>
      <div className={styles['mobile-filter-wrapper']}>
        <div className={styles['mobile-filter-header']}>
          <ResultsContainer fish={items} />
          <Button
            onClick={() => router.back()}
            type="button"
            outline
            color="secondary"
            data-test="go-back"
          >
            &lt; Go Back
          </Button>
        </div>
        <div className={styles['mobile-filter-body']}>
          <Filter />
        </div>
      </div>
    </StockLayout>
  )
}

export default MobileFilter
