import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {

  const [getStudent, setStudent] = useState([]);
  const [getSchool, setSchool] = useState("");
  const [getClass, setClass] = useState("");
  const [getUser, setUser] = useState("");
  const [filterClass, setFilterClass] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

  const selectSchool = (e) => {
    setSchool(e.target.value);
    const res = getStudent.filter(el => el.school === e.target.value);
    setFilterClass(res);
  }

  const selectClass = (e) => {
    setClass(e.target.value);
    const res = filterClass.filter(el => el.class === e.target.value);
    setFilterUser(res);
  }

  const selectUser = (e) => {
    setUser(e.target.value);
  }

  useEffect(() => {
    const getStudent = async () => {
      const res = await axios({
        method: 'get',
        url: process.env.PUBLIC_URL + '/api/student.json'
      })
      return setStudent(res.data);
    };
    getStudent();
  }, [])

  return (
    <div className="main home">
      <div className="notif notif-success">
        <h1>Oyun platformuna hoşgeldiniz. Lütfen aşağıdan kendi bilgilerinizi seçip ilerleyiniz.</h1>
      </div>
      <div className="widget">
        <div className="widget-row">
          <div className="input-select">
            <label htmlFor="select-school">Okulunuz</label>
            <select defaultValue className="select" onChange={selectSchool}>
              <option value="">Seçiniz...</option>
              {getStudent.map(e => <option key={e.id} value={e.school}>{e.school}</option>)}
            </select>
          </div>
        </div>
        <div className="widget-row">
          <div className="input-select">
            <label htmlFor="select-school">Sınıfınız</label>
            <select disabled={getSchool ? false : true} defaultValue className="select" onChange={selectClass}>
              <option value="">Seçiniz...</option>
              {filterClass.map(e => <option key={e.id} value={e.class}>{e.class}</option>)}
            </select>
          </div>
        </div>
        <div className="widget-row">
          <div className="input-select">
            <label htmlFor="select-school">İsim ve Soyisim</label>
            <select disabled={getClass ? false : true} defaultValue className="select" onChange={selectUser}>
              <option value="">Seçiniz...</option>
              {filterUser.map(e => <option key={e.id} value={e.user}>{e.user}</option>)}
            </select>
          </div>
        </div>
        <div className="widget-row">
          <Link to="/week">
            <button disabled={getUser ? false : true} className="btn btn-success">İlerle</button>
          </Link>
        </div>
      </div>
    </div >
  );
}

export default Home;
