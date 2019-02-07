import React from "react";
import { Card } from "reactstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Image from "./Image/Image";
import MissingImage from "./MissingImage";

const FishCard = ({ id, common, scientific, origin, picture, match }) => {
  return (
    <Link to={`${match.url}${id}`}>
      <Card data-test={`livestock-item-${id}`}>
        <div className="d-flex justify-content-center card-thumbnail">
          {picture ? (
            <Image
              className="card-thumbnail-image"
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
        <div style={{ padding: "0.8rem", fontSize: "0.8rem" }}>
          <div style={{ color: "#111", marginBottom: "0.8rem" }}>
            <div style={{ marginBottom: "0.4rempx" }}>{common}</div>
            <div>
              <em>{scientific}</em>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{origin}</small>
            <Link to={`${match.url}${id}`} style={{ fontSize: "0.8rem" }} href="#">
              See details
            </Link>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default withRouter(FishCard);
