import { INCREMENT } from "../Constants/Constants";
import { DECREMENT } from "../Constants/Constants";
import { RESET } from "../Constants/Constants";

export const counterIncrement = () => {
  return {
    type: INCREMENT,
  };
};
export const counterDecrement = () => {
  return {
    type: DECREMENT,
  };
};
export const counterReset = () => {
  return {
    type: RESET,
  };
};
