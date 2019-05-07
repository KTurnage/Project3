import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const smarts = (props) => {
    return <ProgressBar variant= "success" animated now = { props.smarts } label="SMARTS" />
}

export default smarts;