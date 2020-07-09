import React from 'react';

const Navbar=()=>{
    return(  
        <nav className="navbar navbar-expand-lg">     
            <div className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <img style={{maxHeight:'50px'}} src="https://cdn1.iconfinder.com/data/icons/web-basic-6/30/Menu-2-512.png" alt="Menu"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Chats</a>
                    <a className="dropdown-item" href="#">Projects</a>
                    <a className="dropdown-item" href="#">Logout</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar