import React, { Component, useState } from 'react';
import Device from './Component/Devices/Device/Device.component'
import classes from './App.module.css'
import SavedDevices from './Component/SavedDevices/SavedDevice.component'
import {GarageDevices} from './Component/GarageDevices/GarageDevices.component'
import {CheckedOutDevices} from './Component/CheckedOutDevices/CheckedOutDevices.component'

class App extends Component{
  state = {
    devices: [{
    "id": 1,
    "device": "Derpies",
    "os": "Android 4.3",
    "manufacturer": "Motorola",
    "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
    "lastCheckedOutBy": "Chris Evans",
    "isCheckedOut": false,
    edit: false
    },
    {
      "id": 2,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
      },
    {
      "id": 3,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 4,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 5,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 6,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 7,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 8,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 9,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false,
      edit: false
    },
    {
      "id": 10,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": true,
      edit: false
    },
    {
      "id": 11,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": true,
      edit: false
    },
    ]

  }
  countGarageDevices = () => {
    let count = 0
    for(let i= 0; i<this.state.devices.length; i++){
      if(!this.state.devices[i].isCheckedOut){
        count = count+1
      }
    }
    return count
  }


  moveDevice = (deviceIndex) =>{
    let moveDevices = [...this.state.devices];
    moveDevices[deviceIndex].isCheckedOut = !moveDevices[deviceIndex].isCheckedOut
    if(this.countGarageDevices()>10){
    moveDevices[deviceIndex].isCheckedOut = !moveDevices[deviceIndex].isCheckedOut
    return
    }
    if(this.countGarageDevices() <= 10){
    this.setState({devices: moveDevices}, () => {
    this.countGarageDevices()
    })
    }
  }

  removeDevice = (deviceIndex) => {
    let devices = this.state.devices.filter((device)=>{
      return(device != this.state.devices[deviceIndex])
    })
    this.setState({devices: devices})
  }

  saveDevice = (savedDeviceContainer)=>{
    const devices = [...this.state.devices];
    let newDevice = {
      "id": savedDeviceContainer.children[0].value,
      "device": savedDeviceContainer.children[1].value,
      "os": savedDeviceContainer.children[2].value,
      "manufacturer": savedDeviceContainer.children[3].value,
      "lastCheckedOutBy": savedDeviceContainer.children[4].value,
      "lastCheckedOutDate": savedDeviceContainer.children[5].value,
      "isCheckedOut": true,
      edit: false
    }
    devices.push(newDevice);
    this.setState({devices: devices})
    console.log(this.props)
  }

  editDevice =(index)=>{
    const devices = [...this.state.devices];
    devices[index].edit = !devices[index].edit
    this.setState({
      devices: devices
    });
    }

  handleInputChange=(e,index) =>{
    const devices = [...this.state.devices];
    if(devices[index].edit==true){
    devices[index][e.target.name] = e.target.value
    console.log(e.target.name)
  }
  this.setState({
    devices: devices
  })
  } 


  render (){
    const garageDevices = <GarageDevices
                            devices = {this.state.devices}
                            move = {(index)=>this.moveDevice(index)}
                            delete ={(index)=>this.removeDevice(index)}
                            change ={(e,index)=>this.handleInputChange(e,index)}
                            edit={(index)=>this.editDevice(index)}/>

    const checkoutDevices = <div className={classes.InGarage}><CheckedOutDevices
                              devices = {this.state.devices}
                              move = {(index)=>this.moveDevice(index)}
                              delete ={(index)=>this.removeDevice(index)}
                              change ={(e,index)=>this.handleInputChange(e,index)}
                              edit={(index)=>this.editDevice(index)}/>
                              </div>
    
    let storageCapacityReached;
    if(this.countGarageDevices()==10){
      storageCapacityReached = (<h1 className={`${classes.unselectable} ${classes.AlertDisplay}`}>Maximum Storage Capacity Reached!</h1>)      
    }

    return (
      <div>
        {storageCapacityReached}
        <h1>In Garage</h1>
        <div className={classes.InGarage}> 
        {garageDevices}
        </div>
        <div className="notInGarage"> <h2>Has been Checked out</h2>
        {checkoutDevices}
        </div>
        <div className="add-device">
        <h1>Add Device to Checkout</h1>
        <SavedDevices
        className={classes.InGarage}
        id = {null}
        device = {null}
        os= {null}
        manufacturer= {null}
        lastCheckedOutDate= {null}
        lastCheckedOutBy= {null}
        save = {(e)=>this.saveDevice(e.target.parentElement)}
        />
        </div>
      </div>
      )
  }
}

export default App;

