import React from 'react'
import DefaultFishIcon from './DefaultFishIcon'
import styles from './MissingImage.module.scss'

export default (): JSX.Element => (
  <div
    className={`d-flex justify-content-center align-items-center ${styles['img-missing-text']}`}
  >
    <DefaultFishIcon width={75} height={75} fill={'#ddd'} />
  </div>
)
