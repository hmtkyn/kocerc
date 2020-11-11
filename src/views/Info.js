import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Info() {

  const [disable, setDisable] = useState(true);
  const [counter, setCounter] = useState(30);

  useEffect(() => {

    let intervalID = setInterval(() => {
      setCounter(counter - 1)
    }, 1000);
    if (counter === 0) {
      setDisable(false);
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID)

  }, [counter]);

  return (
    <div className="main week">
      <div className="notif notif-success">
        <h1>Bilgilendirme</h1>
      </div>
      <div className="widget">
        <div className="widget-row">
          <div className="text-box-group">
            <p className="text-box">
              - Amacımız oyun oynamak.
          </p>
            <p className="text-box">
              - Arkadaşınızla beraber oynayacaksınız.
          </p>
            <p className="text-box">
              - Lütfen sıranız geldiğinde oynayın.
          </p>
          </div>
        </div>
        <div className="widget-row">
          <Link to="/video">
            <button disabled={disable} className="btn btn-success">{disable ? counter < 10 ? "0" + counter : counter : "İlerle"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
