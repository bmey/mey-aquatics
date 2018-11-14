import React from "react";
import { CardColumns } from "reactstrap";
import filter from "../service/filter";
import sort from "../service/sort";
import FishCard from "./FishCard";
import "./FishList.css";

const FishList = ({ fish, appliedFilters, appliedSortId }) => {
  const filteredList = filter(fish, appliedFilters);

  return (
    <CardColumns>
      {sort(filteredList, appliedSortId).map(item => (
        <FishCard key={item.id} {...item} />
      ))}
    </CardColumns>
  );
};

export default FishList;
