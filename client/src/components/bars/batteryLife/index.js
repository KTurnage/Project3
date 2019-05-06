import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const BatteryLife = (props) => {
    return <ProgressBar animated now = { props.batteryLife } label="BATTERY" />
}

export default BatteryLife;
