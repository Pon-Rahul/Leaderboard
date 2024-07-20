import { OPEN_POPUP, CLOSE_POPUP, ADD_SCORE } from "./actions";

const initialState = {
  scores: [
    { name: "Alice", time: "01:15:20" },
    { name: "Bob", time: "02:30:50" },
    { name: "Charlie", time: "00:45:35" },
    { name: "David", time: "03:20:10" },
    { name: "Eve", time: "01:50:45" },
    { name: "Frank", time: "02:05:30" },
    { name: "Grace", time: "03:10:25" },
    { name: "Hannah", time: "00:55:40" },
    { name: "Ivy", time: "01:25:15" },
    { name: "Jack", time: "02:40:50" },
    { name: "Kevin", time: "00:35:30" },
    { name: "Laura", time: "03:00:35" },
    { name: "Mike", time: "01:10:25" },
    { name: "Nina", time: "02:20:45" },
    { name: "Oscar", time: "00:50:40" },
    { name: "Paul", time: "01:40:30" },
    { name: "Quincy", time: "02:10:15" },
    { name: "Rachel", time: "03:30:50" },
    { name: "Steve", time: "00:25:20" },
    { name: "Tina", time: "01:35:10" },
  ],
  showPopup: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return { ...state, showPopup: true };
    case CLOSE_POPUP:
      return { ...state, showPopup: false };
    case ADD_SCORE:
      return { ...state, scores: [...state.scores, action.payload] };
    default:
      return state;
  }
};

export default reducer;
