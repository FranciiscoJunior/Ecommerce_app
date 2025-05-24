import React from "react"
import "../header/Header.css"
import Navbar from "./Navbar"
import Search from "./Search"
import Head from "./Head"

const Header = () => {
    return (
        <>
        <Head/>
        <Navbar/>
        <Search/>
        </>
    )
}

export default Header