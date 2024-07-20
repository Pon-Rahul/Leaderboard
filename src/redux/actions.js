export const OPEN_POPUP = "OPEN_POPUP";
export const CLOSE_POPUP = "CLOSE_POPUP";
export const ADD_SCORE = "ADD_SCORE";

export const openPopup = () => ({ type: OPEN_POPUP });
export const closePopup = () => ({ type: CLOSE_POPUP });
export const addScore = (score) => ({ type: ADD_SCORE, payload: score });
