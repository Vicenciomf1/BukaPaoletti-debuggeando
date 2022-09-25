import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./ButtonCategory.css"

function ButtonCategory() {
    return (
        <>
            <NavLink to="/category/imperial"><Button className="btnCategory" variant="outline">Imperial</Button></NavLink>
            <NavLink to="/category/sour"><Button className="btnCategory" variant="outline">Sour</Button></NavLink>
            <NavLink to="/category/ipa"><Button className="btnCategory" variant="outline">IPA</Button></NavLink>
            <NavLink to="/category/amber"><Button className="btnCategory" variant="outline">Amber</Button></NavLink>
        </>
    )
}

export default ButtonCategory