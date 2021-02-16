import React, { Component } from 'react';
import Device from './Device/Device.component'

const GarageDevices = (props)=>{
    
    let garageDevices = null
    let checkoutDevices = null
    let maxStorage = null;

    
    
    if(props.countGarageDevices()==10){
        maxStorage = (<h1 className={classes.AlertDisplay}>Maximum Storage Capacity Reached!</h1>)      
    }

    garageDevices = (<div className={classes.InGarage}>
        {props.devices.map((device,index) =>{
        if(!props.devices[index].isCheckedOut){
        return (
        <div><Device
        className={classes.InGarage}
        id={props.devices[index].id}
        device={props.devices[index].device}
        os={props.devices[index].os}
        manufacturer={props.devices[index].manufacturer}
        lastCheckedOutDate={props.devices[index].lastCheckedOutDate}
        lastCheckedOutBy={props.devices[index].lastCheckedOutBy}
        isCheckedOut = {props.devices[index].isCheckedOut}
        move = {()=>props.moveDevice(index)}
        delete ={()=>props.removeDevice(index)}
        >
        </Device>
        </div>)
        }
        })}
        </div>)
    
    return(garageDevices)

}