import React , { useState } from 'react'
import axios from 'axios';
import { useAlert } from 'react-alert'

export const SaveMap = (props) => {
    const [name, setName] = useState('');
    const alert = useAlert();
    const BASEURL = process.env.REACT_APP_BASEURL

    function onSubmit(e) {
        e.preventDefault()
        const map = {
          name: name,
          url: props.url
        } 
        axios.post(`${BASEURL}/map/add`,map)
        .then(res => {
            props.closeModal()
            setName('');
          alert.show('Map Saved Successfully!', {
            timeout: 5000,
            type: 'success',
          });
        })
        .catch(err => {
          alert.show('Error Occured!', {
            timeout: 5000,
            type: 'error',
          });
        })
  
      }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Name: </label>
                <input type="text" required className="form-control" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Save Map" className="btn btn-primary mt-4 mx-auto" />  
            </div>
        </form> 
    )
}
