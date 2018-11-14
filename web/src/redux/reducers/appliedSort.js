import ACTIONS from "../actionTypes";
import { SORT_BY } from "../../utility/constants";

const initialState = {
  id: SORT_BY.ALPHABETICAL_COMMON,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_SORT:
      return { id: action.payload };
    default:
      return state;
  }
}
