import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from './Box';

export const Collection = () => {
    const [maps, setMaps] = useState([]);

    const getCollection = async () => {
        axios.get('http://localhost:5000/map/')
        .then(res => {
            setMaps(res.data)
        })
    }

    useEffect(() => {
        getCollection();
    }, [])


    return (
        <div>
            <h2 className="mt-4">Saved Maps</h2>
            <div className="row">
                {maps.map((m) => (
                <div className="col-md-3 mapDisplayWrapper">
                    <div key={m._id} className="mapDisplay">
                        <img src={m.url} alt="" className="mapDisplay_image"/>
                        <h5>{m.name}</h5>
                    </div>
                    <div className="mapDisplay_control">
                        <Box url={m.url} saved={true}/>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
                ))}
            </div >
        </div>
    )
}
