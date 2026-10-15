import './App.css';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import { useState } from 'react';
import SecNav from './Component/SecNav';
import Time from './Component/Time';
import AddNewsOn from './Component/AddNewsOn';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [addnews, setaddnews] = useState(false)
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [search, setsearch] = useState("")

  return (
    <div>
      <div style={{ filter: showLogin || addnews ? "blur(5px)" : "none", pointerEvents: showLogin ? "none" : "auto" }}>
        <NavBar onLoginClick={() => setShowLogin(true)} 
                onNewsClick={() => setaddnews(true)}
                onsearch={(ser)=> setsearch(ser)} 
                onLogoutClick={()=> {setUsername("") ; 
                setShowLogin(false); setUseremail("")}} 
                username={username} useremail={useremail} /> 
                <div style={{marginTop:"150px"}}><Time/></div>
        
        {addnews === true || showLogin=== true ? "":<SecNav newsList={newsList} scr={search}/> }   
      </div>
      {showLogin && (
        <div   style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 999999,
      background: "rgba(0,0,0,0.5)",
      display: "grid",
      placeItems: "center"
    }}> 
          <Login  closeLogin={() => setShowLogin(false)} onLoginSuccess={(name) => setUsername(name)} onLoginSuccessEmail={(email) => setUseremail(email)} />            
        </div>       
      )}
      {addnews && (
        <div   style={{
      position: "absolute",
      top: -500,
      right: 0,
      bottom: -500,
      left: 0,
      zIndex: 999999,
      background: "rgba(0,0,0,0.5)",
      display: "grid",
      placeItems: "center"
    }}> 
          <AddNewsOn  closeLogin={() => setaddnews(false)}  onPublish={(news) => setNewsList(prev => [...prev, news])} username={username} />            
        </div>       
      )}
      
      
    </div>
  );
}

export default App;
