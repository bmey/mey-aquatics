import React from 'react';
import filter from '../service/filter';
import sort from '../service/sort';
import FishCard from './FishCard';
import './FishList.css';

const FishList = ({ fish, appliedFilters, appliedSortId }) => {
  const filteredList = filter(fish, appliedFilters);

  return (
    <div className='card-list'>
      {sort(filteredList, appliedSortId).map(item => (
        <FishCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FishList;
