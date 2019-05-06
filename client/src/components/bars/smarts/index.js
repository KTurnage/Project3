import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const smarts = (props) => {
    return <ProgressBar animated now = { props.smarts } label="SMARTS" />
}

export default smarts;