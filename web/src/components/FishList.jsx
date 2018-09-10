import React from "react";
import { CardColumns } from "reactstrap";
import FishCard from "./FishCard";
import "./FishList.css";

const FishList = ({ fish, postDate }) => {
  return (
    <CardColumns>
      {fish.map(item => (
        <FishCard key={item.id} {...item} />
      ))}
    </CardColumns>
  );
};

export default FishList;
