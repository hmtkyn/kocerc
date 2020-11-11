import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Week() {

  const [checked, setChecked] = useState(false);

  const clickItem = (e) => {
    e.preventDefault()
    setChecked(!checked);
  }

  return (
    <div className="main week">
      <div className="notif notif-success">
        <h1>İlgili haftayı seçiniz.</h1>
      </div>
      <div className="widget">
        <div className="widget-row">
          <div className="input-checkbox-group">
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="01" />
              <label htmlFor="select-school">1. Hafta</label>
            </div>
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="02" />
              <label htmlFor="select-school">2. Hafta</label>
            </div>
            <div className="input-checkbox" onClick={clickItem}>
              <input checked={checked ? "checked" : ""} onChange={clickItem} type="checkbox" value="03" />
              <label htmlFor="select-school">3. Hafta</label>
            </div>
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="04" />
              <label htmlFor="select-school">4. Hafta</label>
            </div>
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="05" />
              <label htmlFor="select-school">5. Hafta</label>
            </div>
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="06" />
              <label htmlFor="select-school">6. Hafta</label>
            </div>
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="07" />
              <label htmlFor="select-school">7. Hafta</label>
            </div>
            <div className="input-checkbox disable">
              <input disabled type="checkbox" value="08" />
              <label htmlFor="select-school">8. Hafta</label>
            </div>
          </div>
        </div>
        <div className="widget-row">
          <Link to="/info">
            <button disabled={!checked} className="btn btn-success">İlerle</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Week;
