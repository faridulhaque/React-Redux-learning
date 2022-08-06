import { INCREMENT } from "../Constants/Constants";
import { DECREMENT } from "../Constants/Constants";
import { RESET } from "../Constants/Constants";
const initialCounter = { count: 0 };
export const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
