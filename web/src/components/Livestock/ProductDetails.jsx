import React from "react";
import { Table } from "reactstrap";
import Image from "../Image/Image";
import MissingImage from "../MissingImage";

const sizeMap = [
  {
    key: "B",
    displayName: "Breeders",
  },
  {
    key: "L",
    displayName: "Large",
  },
  {
    key: "M",
    displayName: "Medium",
  },
  {
    key: "S",
    displayName: "Small",
  },
  {
    key: "F",
    displayName: "Fry",
  },
];

const ProductDetails = ({ onCaresList, common, scientific, origin, sizes, picture }) => {
  return (
    <>
      <div className="d-flex">
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
        <div>
          <h2>{common || scientific}</h2>
          <div>Common name: {common}</div>
          <div>Scientific name: {scientific}</div>
          <div>Origin: {origin}</div>
          <div>Endangered: {onCaresList ? "Yes" : "No"}</div>
        </div>
      </div>
      <h2 style={{ marginTop: "20px" }}>Stock available</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Size</th>
            <th>Length (in)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sizeMap.map(sizeKey => {
            const { count, length } = sizes[sizeKey.key];
            if (count === 0) {
              return null;
            }

            return (
              <tr key={sizeKey.key}>
                <td>{sizeKey.displayName}</td>
                <td>{length ? `${length}"` : <span className="text-muted">(unknown)</span>}</td>
                <td>{count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ProductDetails;
