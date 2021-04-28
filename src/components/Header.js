import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>I'm Dilusha Fernando and I'm a</h1>
                <Typed
                    className = "Typed-text"
                    strings={["Web Developer","Software Developer","Blogger"]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop
                />
                
            </div>
            
        </div>
    )
}

export default Header
