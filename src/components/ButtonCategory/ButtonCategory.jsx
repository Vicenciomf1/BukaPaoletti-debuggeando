import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./ButtonCategory.css"

function ButtonCategory() {
    return (
        <>
            <Link to="/category/imperial"><Button className="btnCategory" variant="outline">Imperial</Button></Link>
            <Link to="/category/sour"><Button className="btnCategory" variant="outline">Sour</Button></Link>
            <Link to="/category/ipa"><Button className="btnCategory" variant="outline">IPA</Button></Link>
            <Link to="/category/amber"><Button className="btnCategory" variant="outline">Amber</Button></Link>
        </>
    )
}

export default ButtonCategory