import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const BatteryLife = (props) => {
       return  <ProgressBar variant= "danger" animated now = { props.batteryLife } label="BATTERY" className="progress-spacing"/>
        
}

export default BatteryLife;
