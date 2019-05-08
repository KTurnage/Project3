import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './smarts_style.css'

const smarts = (props) => {
    return <ProgressBar variant= "success" animated now = { props.smarts } label="SMARTS" className="smarts" />
}

export default smarts;