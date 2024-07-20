import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Popup.css";
import { closePopup } from "../../redux/actions";

const Popup = ({ handleAddScore }) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    handleAddScore({ name, time });
    dispatch(closePopup());
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="score">Add Score</div>
        <label className="seconds">
          Name:
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter username"
            />
          </div>
        </label>
        <label className="seconds">
          Score (MM:SS:MS):
          <div>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="00:00:00"
            />
          </div>
        </label>
        <div className="submit">
          <button onClick={handleSubmit}>ADD</button>
          <button onClick={() => dispatch(closePopup())}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
