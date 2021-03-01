import React from 'react'
import Device from '../Devices/Device/Device.component'
import classes from './Device.module.css'

export const GarageDevices = (props) => {
    return (
        props.devices.map((_,index) =>{
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
          move = {()=>props.move(index)}
          delete ={()=>props.delete(index)}
          change ={(e)=>props.change(e,index)}
          edit={()=>props.edit(index)}
          >
          </Device>
          </div>)
        }
        }))
}
