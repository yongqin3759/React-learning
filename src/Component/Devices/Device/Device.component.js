import React, { Component, useState } from 'react';
import classes from './Device.module.css'

const device = (props) => {
  let move = props.isCheckedOut ? 'Store': 'Checkout'
  let editing = (e) => props.change(e)

  // props.edit? {editing =(e) => props.change(e)}: null
  return (
      <div className={classes.Container}>
      <div className={classes.DeviceComponent}>
      <input value ={props.id} className={classes.Device}/>
      <input onChange={editing} value={props.device} className={classes.Device} name="device"/>
      <input onChange={editing} value= {props.os} className={classes.Device} name="os"/>
      <input onChange={editing} className={classes.Device} value={props.manufacturer} name="manufacturer"/>
      <input onChange={editing} className={classes.Device} value={props.lastCheckedOutBy} name="lastCheckedOutBy"/>
      <input onChange={editing} className={classes.Device} value = {props.lastCheckedOutDate} name="lastCheckedOutDate"/>
      <button onClick ={props.move}>{move}</button>
      <button onClick = {props.delete}>Delete</button>
      <button onClick = {props.edit}>Edit</button>
      </div>
      </div>
      )
  }


export default device;

