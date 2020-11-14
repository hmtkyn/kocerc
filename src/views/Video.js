import React from 'react';
import { Link } from 'react-router-dom';

function Video() {

  return (
    <div className="main week">
      <div className="notif notif-success">
        <h1>Bu videoyu hep beraber izleyelim.</h1>
      </div>
      <div className="widget">
        <div className="widget-row">
          <div className="video-box">
            <iframe title="Dünyanın en derin noktasında ne var?" width={600} height={360} src="https://www.youtube.com/embed/qL4OydeNzFE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <div className="widget-row">
          <Link to="/start">
            <button className="btn btn-success">İlerle</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
