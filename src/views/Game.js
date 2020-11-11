import React from 'react';
import { Link } from 'react-router-dom';

function Game() {

  return (
    <div className="main week">
      <div className="widget">
        <div className="widget-row">
          <h1>Oyun Başladı...</h1>
          <hr />
          <Link to="/">
            <button className="btn btn-success">Başa Dön</button>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Game;
