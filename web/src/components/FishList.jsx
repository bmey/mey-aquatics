import React from "react";
import { CardColumns } from "reactstrap";
import filter from "../service/filter";
import FishCard from "./FishCard";
import "./FishList.css";

const FishList = ({ fish, appliedFilters }) => {
  return (
    <CardColumns>
      {filter(fish, appliedFilters).map(item => (
        <FishCard key={item.id} {...item} />
      ))}
    </CardColumns>
  );
};

export default FishList;
