import React from 'react'
import Link from 'next/link'
import ButtonLink from '../ButtonLink/ButtonLink'
import Image from '../Image/Image'
import MissingImage from '../MissingImage'
import { getOriginDisplayName } from '../../service/origin'
import OutOfStock from '../OutOfStock'
import { FishItem, Origin } from '../../types'
import { getStockDetailRoute } from '../../service/routes'

const FishCard = ({
  id,
  common,
  scientific,
  origin,
  picture,
  sizes,
}: FishItem): JSX.Element => {
  return (
    <ButtonLink
      to={getStockDetailRoute(id)}
      className="button-card"
      data-test={`livestock-item-${id}`}
    >
      <div className="d-flex justify-content-center card-thumbnail position-relative">
        {picture ? (
          <Image
            publicId={picture}
            dpr="auto"
            responsive
            aspectRatio="16:9"
            fetchFormat="auto"
            quality="auto:low"
            secure="true"
            crop="fill"
            alt=""
          />
        ) : (
          <MissingImage />
        )}
        <div className="position-absolute" style={{ left: 0, top: 0 }}>
          <OutOfStock sizes={sizes} />
        </div>
      </div>
      <div className="card-body-wrapper">
        <div className="text-normal card-body-text">
          <div className="font-weight-semibold mb-0">{common}</div>
          <small className="text-muted">{scientific}</small>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            {getOriginDisplayName(origin as Origin)}
          </small>
          <Link href={getStockDetailRoute(id)}>
            <a tabIndex={-1}>See details</a>
          </Link>
        </div>
      </div>
    </ButtonLink>
  )
}

export default FishCard
