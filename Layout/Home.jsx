import React from 'react'
import Nav from '../Dependent/NavBar/Nav/Home'
import Footer from '../Dependent/Footer/Home'


function Home({children}) {
    return (
        <div className ="layout">
            <Nav/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Home
