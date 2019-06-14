import React from 'react'
import './Footer.css';


const Footer = () => {

    return (

        <footer className="page-footer footer-copyright" id="style">


            <div className="container" >
                © {new Date().getFullYear()} Primitive Type

                </div>
        </footer>
    )
}

export { Footer }

