import React from 'react';
import { Link } from 'react-router-dom';

function Start() {

  return (
    <div className="main week">
      <div className="notif notif-success">
        <h1>Bugün <b>Buz Devri</b> Oynuyoruz.</h1>
      </div>
      <div className="widget">
        <div className="widget-row">
          <div className="image-box">
            <img src="/game-buz-devri.jpg" alt="Buz Devri Oyunu" />
          </div>
        </div>
        <div className="widget-row">
          <div className="button-row">
            <Link to="/game">
              <button className="btn btn-success">1. Bölüm</button>
            </Link>
            <Link to="/game">
              <button disabled className="btn btn-success">2. Bölüm</button>
            </Link>
            <Link to="/game">
              <button disabled className="btn btn-success">3. Bölüm</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
