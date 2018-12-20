import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Badge } from "reactstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Image from "./Image/Image";
import MissingImage from "./MissingImage";

const SizeItem = ({ size, length, count }) => {
  return (
    <li className="list-group-item">
      {size}({length}
      ") - x{count}
    </li>
  );
};

const FishCard = ({ id, onCaresList, common, scientific, origin, sizes, picture, match }) => {
  return (
    <Card data-test={`livestock-item-${id}`}>
      <Link to={`${match.url}${id}`}>
        <CardBody>
          <CardTitle>{common || scientific}</CardTitle>
          <CardSubtitle>{common ? `${scientific} | ${origin}` : { origin }}</CardSubtitle>
        </CardBody>
      </Link>
      <Link to={`${match.url}${id}`}>
        <div className="d-flex justify-content-center">
          {picture ? (
            <Image
              className="card-thumbnail"
              publicId={picture}
              width="auto"
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
        </div>
      </Link>
      <CardBody>
        <ul className="list-group list-group-flush">
          {onCaresList && (
            <li className="list-group-item d-flex justify-content-between">
              <span>
                <Badge color="success">&#x2714;</Badge> on CARES List
              </span>
              <small className="text-right">
                <a href="https://caresforfish.org/">
                  <Badge color="dark" pill>
                    ?
                  </Badge>{" "}
                  What is CARES?
                </a>
              </small>
            </li>
          )}
          {Object.keys(sizes).map(size => {
            return <SizeItem key={size} {...{ size, ...sizes[size] }} />;
          })}
        </ul>
      </CardBody>
    </Card>
  );
};

export default withRouter(FishCard);
