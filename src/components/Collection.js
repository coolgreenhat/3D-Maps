import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Box from './Box';

const BASEURL = process.env.REACT_APP_BASEURL

export const Collection = () => {
    const [maps, setMaps] = useState([]);

    const getCollection = async () => {
        axios.get(`${BASEURL}/map`)
        .then(res => {
            setMaps(res.data)
        })
    }

    useEffect(() => {
        getCollection();
    }, [])

    const updateMaps = (id) => {
        const updatedMaps = [...maps].filter(map => (map["_id"] != id))
        setMaps(updatedMaps)
    }

    return (
        <div className="collection">
            <h2>Saved Maps</h2>
            <div className="row">
                {maps.map((m) => (
                <div key={m._id} className="col-md-3 mapDisplayWrapper">
                    <div  className="mapDisplay">
                        <img src={m.url} alt="" className="mapDisplay_image"/>
                        <h5>{m.name}</h5>
                    </div>
                    <div className="mapDisplay_control">
                        <Box url={m.url} name={m.name} updateMaps={() => updateMaps(m._id)} id={m._id} show={false}/>
                    </div>
                </div>
                ))}
            </div >
        </div>
    )
}
