import React, { Component, useState } from 'react';
import classes from './Device.module.css'

const device = (props) => {
  let move = props.isCheckedOut ? 'Store': 'Checkout';


  return (
      <div className={classes.Container}>
      <div className={classes.DeviceComponent}>
      <input value ={props.id} className={classes.Device}/>
      <input onChange={props.inputChangeHandler} name="device" value={props.device} className={classes.Device}/>
      <input value= {props.os} className={classes.Device}/>
      <input className={classes.Device} value={props.manufacturer}/>
      <input className={classes.Device} value={props.lastCheckedOutBy}/>
      <input className={classes.Device} value = {props.lastCheckedOutDate}/>
      <button onClick ={props.move}>{move}</button>
      <button onClick = {props.delete}>Delete</button>
      <button>Edit</button>
      </div>
      </div>
      )
  }


export default device;

