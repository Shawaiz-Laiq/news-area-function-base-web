import React, { useState } from 'react'

 function NavBar(props) {
    const [isOpen, setisOpen] = useState(false)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     };
    // }

    const toggleDropdown = () => {
        setisOpen(prevState => !prevState);
       
    }
    const handlesubmit = (e) =>{
        e.preventDefault(); 
        // const searchValue = 
        const Searchon = document.getElementById("searchInput").value;
        props.onsearch(Searchon); 
    }

   
        const username = props.username || ""; 
        const lastName = username.trim().split(" ").pop() || "User"; 

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-brand">News Area</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex align-items-center">           
                                <li className="nav-item">
                                    <span className="nav-link active" style={{ cursor: 'pointer' }}>About</span>
                                </li>
                                
                                {props.username === "" ?                                    
                                <li className="nav-item">
                                    <span className="nav-link active" style={{ cursor: 'pointer' }} onClick={props.onLoginClick}>Login</span> 
                                </li> : 
                                
                                <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`} style={{ position: 'relative' }}>
                                      <span 
                                        className="nav-link dropdown-toggle" 
                                        role="button" 
                                        style={{ marginRight: "100px", width: "100px", overflow: "hidden", cursor: "pointer" }}
                                        onClick={toggleDropdown} 
                                      >
                                        {lastName}
                                      </span> 
                                        
                                        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{ position: 'absolute', zIndex: 1050 }}>
                                            <li><span className="dropdown-item" style={{ overflow: "hidden" }}>Name: {props.username}</span></li> 
                                            <li><span className="dropdown-item" style={{ overflow: "hidden" }}>Mail: {props.useremail}</span></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <span className="dropdown-item" onClick={() => {
                                                    setisOpen(false); 
                                                    props.onLogoutClick();
                                                }} style={{ cursor: 'pointer' }}>
                                                    LogOut
                                                </span>
                                            </li>
                                        </ul>                   
                                </li>}
                                
                                <li className="nav-item mx-auto" style={{ minWidth: '300px' }}>
                                    <form className="d-flex" role="search" onSubmit={handlesubmit}>
                                        <input   id="searchInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </li>
                                {props.username === "" ?  " " :
                                <li>
                                    <span onClick={props.onNewsClick}  style={{ cursor: 'pointer' }}>Add News</span>
                                </li> }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}
export default NavBar;