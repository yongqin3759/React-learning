import React, { Component, useState } from 'react';
import classes from './Device.module.css'

const SavedDevice = (props) => {


  return (
      <div className={classes.Container}>
      <div id="add-device"className={classes.DeviceComponent}>
      <input value ={props.id} className={classes.Device}/>
      <input value={props.device} className={classes.Device}/>
      <input value= {props.os} className={classes.Device}/>
      <input className={classes.Device} value={props.manufacturer}/>
      <input className={classes.Device} value={props.lastCheckedOutBy}/>
      <input className={classes.Device} value = {props.lastCheckedOutDate}/>
      <button onClick = {props.save}>Save</button>
      </div>
      </div>
      )
  }


export default SavedDevice;