import React, { Component, useState } from 'react';
import Device from './Component/Device.component'
import classes from './App.module.css'

class App extends Component{
  state = {
    devices: [{
    "id": 1,
    "device": "Derpies",
    "os": "Android 4.3",
    "manufacturer": "Motorola",
    "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
    "lastCheckedOutBy": "Chris Evans",
    "isCheckedOut": false
    },
    {
      "id": 2,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
      },
    {
      "id": 3,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 4,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 5,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 6,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 7,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 8,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 9,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": false
    },
    {
      "id": 10,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": true
    },
    {
      "id": 11,
      "device": "Moto G",
      "os": "Android 4.3",
      "manufacturer": "Motorola",
      "lastCheckedOutDate": "2016-02-21T09:10:00-05:00",
      "lastCheckedOutBy": "Chris Evans",
      "isCheckedOut": true
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
    console.log('1. '+ this.countGarageDevices())
    let moveDevices = [...this.state.devices];
    moveDevices[deviceIndex].isCheckedOut = !moveDevices[deviceIndex].isCheckedOut
    // why is this code nessecary?
    if(this.countGarageDevices()>10){
    moveDevices[deviceIndex].isCheckedOut = !moveDevices[deviceIndex].isCheckedOut
    return
    }
    // why dis code ^^^^^^^^^
    
    console.log('2. '+ this.countGarageDevices())
    if(this.countGarageDevices() <= 10){
    this.setState({devices: moveDevices}, () => {
    this.countGarageDevices()
    console.log('3. '+ this.countGarageDevices())
    })
    }
  }

  removeDevice = (deviceIndex) => {
    const devices = [...this.state.devices];
    devices.splice(deviceIndex,1)
    this.setState({devices: devices})
  }
  render (){
    let garageDevices = null
    let checkoutDevices = null
    let maxStorage = null;
    
    garageDevices = (<div className={classes.InGarage}>
        {this.state.devices.map((device,index) =>{
          if(!this.state.devices[index].isCheckedOut){
          return (
          <div><Device
          className={classes.InGarage}
          id={this.state.devices[index].id}
          device={this.state.devices[index].device}
          os={this.state.devices[index].os}
          manufacturer={this.state.devices[index].manufacturer}
          lastCheckedOutDate={this.state.devices[index].lastCheckedOutDate}
          lastCheckedOutBy={this.state.devices[index].lastCheckedOutBy}
          isCheckedOut = {this.state.devices[index].isCheckedOut}
          move = {()=>this.moveDevice(index)}
          delete ={()=>this.removeDevice(index)}
          >
          </Device>
          </div>)
        }
        })}
        </div>)

  
    checkoutDevices = (<div className={classes.InGarage}>
        {this.state.devices.map((device,index) =>{
          if(this.state.devices[index].isCheckedOut){
          return (<Device
          className={classes.InGarage}
          id={this.state.devices[index].id}
          device={this.state.devices[index].device}
          os={this.state.devices[index].os}
          manufacturer={this.state.devices[index].manufacturer}
          lastCheckedOutDate={this.state.devices[index].lastCheckedOutDate}
          lastCheckedOutBy={this.state.devices[index].lastCheckedOutBy}
          isCheckedOut = {this.state.devices[index].isCheckedOut}
          move = {()=>this.moveDevice(index)}
          delete ={()=>this.removeDevice(index)}
          />)
        }
        })}
        </div>)

    if(this.countGarageDevices()==10){
      maxStorage = (<h1 className={classes.AlertDisplay}>Maximum Storage Capacity Reached!</h1>)      
    }

    return (
      <div>
        {maxStorage}
        <h1>In Garage</h1>
        <div className={classes.InGarage}> 
        {garageDevices}
        </div>
        <div className="notInGarage"> <h2>Has been Checked out</h2>
        {checkoutDevices}
        </div>
      
      </div>
      )
  }
}

export default App;

