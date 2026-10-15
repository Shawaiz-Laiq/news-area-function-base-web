import React, { useState } from 'react'
import News from "./News"

function Secnav(props) {
  const [activeTab, setactiveTab] = useState("all");
  const [newsarea, setnewsarea] = useState(false);
  const [secondNav, setsecondNav] = useState("all");

  const handleTabClick = (tabName) => {
    setactiveTab(tabName);
    setsecondNav(tabName)
  };
  const handleNewsArea = () => {
    setnewsarea(true)
  };
  const handleAll = () => {
    setnewsarea(false)
  };


    return (
      <>
      <div className="container ">

        <ul className="nav nav-underline justify-content-start pb-1 position-fixed  bg-white" style={{width:"100%", paddingTop: "30px", top:"50px"}}>
          
          <li className="nav-item ">
            <span 
              className={`nav-link ${activeTab === 'all' ? 'active font-weight-bold' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'all' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {handleTabClick('all'); handleAll()}}
            >
              All
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'pakistan' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'pakistan' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {handleTabClick('pakistan'); handleAll()}}
            >
              Pakistan
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'sports' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'sports' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {handleTabClick('sports'); handleAll()}}
            >
              Sports
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'politics' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'politics' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {handleTabClick('politics');  handleAll() }}
            >
              News
            </span>
          </li>
          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'newsarea' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'newsarea' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {
                handleTabClick('newsarea');
                handleNewsArea();
            }}>
              News Area
            </span>
          </li>
        </ul>
      </div> <div className="container " >
        <News newsarea={newsarea} secondNav={secondNav}  newsList={props.newsList} scr={props.scr}/>
       </div> </>
    )
  
}
export default Secnav;