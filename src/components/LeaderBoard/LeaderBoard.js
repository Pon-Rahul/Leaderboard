import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LeaderBoard.css";
import background from "../../Assets/image 65 (1).png";
import { GiTrophyCup } from "react-icons/gi";
import { GiStopwatch } from "react-icons/gi";
import { MdCurrencyRupee } from "react-icons/md";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import { openPopup, addScore } from "../../redux/actions";

const LeaderBoard = () => {
  const data = useSelector((state) => state.scores);
  const showPopup = useSelector((state) => state.showPopup);
  const [newEntryIndex, setNewEntryIndex] = useState(null);
  const dispatch = useDispatch();
  const newEntryRef = useRef(null);

  const parseTime = (time) => {
    const [minutes, seconds, milliseconds] = time.split(":").map(Number);
    return minutes * 60000 + seconds * 1000 + milliseconds;
  };

  const sortedData = [...data].sort(
    (a, b) => parseTime(a.time) - parseTime(b.time)
  );

  useEffect(() => {
    if (newEntryIndex !== null && newEntryRef.current) {
      newEntryRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setNewEntryIndex(null), 1000);
    }
  }, [newEntryIndex]);

  const handleAddScore = (score) => {
    dispatch(addScore(score));
    const index = sortedData.findIndex(
      (s) => parseTime(s.time) > parseTime(score.time)
    );
    setNewEntryIndex(index === -1 ? sortedData.length : index);
  };

  return (
    <div>
      <div>
        <img src={background} alt="background" className="background-image" />
      </div>
      <div className="overlay"></div>
      <div>
        <div>
          <Header />
        </div>
        <div className="heading">FASTEST OF TODAY</div>
        <div>
          <button onClick={() => dispatch(openPopup())} className="button-62">
            ADD SCORE
          </button>
        </div>
        <div className="title">
          <div className="row">
            <div>
              <GiTrophyCup />
            </div>
            <div>NAME</div>
          </div>
          <div className="watch">
            <GiStopwatch /> TIME
          </div>
        </div>
        <div className="board-container">
          {sortedData.slice(0, 10).map((score, i) => (
            <div
              className={`table ${newEntryIndex === i ? "new-entry" : ""} ${
                i === 0 ? "first" : i === 1 ? "second" : i === 2 ? "third" : ""
              }`}
              key={i}
              ref={newEntryIndex === i ? newEntryRef : null}
            >
              <div className="row">
                <div>{i + 1}</div>
                <div>{score.name}</div>
              </div>
              <div className="row">
                <div>
                  {i === 0 ? (
                    <div>
                      <MdCurrencyRupee /> 50000
                    </div>
                  ) : i === 1 ? (
                    <div>
                      <MdCurrencyRupee /> 5000
                    </div>
                  ) : i === 2 ? (
                    <div>
                      <MdCurrencyRupee /> 500
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>{score.time}</div>
              </div>
            </div>
          ))}
          {sortedData.length > 10 && (
            <div className="scrollable-board">
              {sortedData.slice(10).map((score, i) => (
                <div
                  className={`table ${
                    newEntryIndex === i + 10 ? "new-entry" : ""
                  }`}
                  key={i + 10}
                  ref={newEntryIndex === i + 10 ? newEntryRef : null}
                >
                  <div className="row">
                    <div>{i + 11}</div>
                    <div>{score.name}</div>
                  </div>
                  <div className="row">
                    <div></div>
                    <div>{score.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      {showPopup && <Popup handleAddScore={handleAddScore} />}
    </div>
  );
};

export default LeaderBoard;
