import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Badge } from "reactstrap";

const SizeItem = ({ size, length, price, count }) => {
  return (
    <li className="list-group-item">
      {size}({length}
      ") - x{count} - ${price}
    </li>
  );
};

const FishCard = ({ id, onCaresList, common, scientific, origin, sizes }) => {
  console.log(sizes);
  return (
    <Card>
      <CardBody>
        <CardTitle>{common || scientific}</CardTitle>
        <CardSubtitle>{common ? `${scientific} | ${origin}` : { origin }}</CardSubtitle>
      </CardBody>
      {/* <img
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=160%C3%9790&w=160&h=90"
        alt="Card image cap"
      /> */}
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

export default FishCard;
