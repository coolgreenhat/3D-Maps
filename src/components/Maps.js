import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import Box from './Box'

const MAPBOX_TOKEN = process.env.REACT_APP_MAPTOKEN

const Maps = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  const staticURL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${viewport["longitude"]},${viewport["latitude"]},${viewport["zoom"]}/800x800?access_token=${MAPBOX_TOKEN}`

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
 
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
 
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  return (
    <div className="mapBox" id="map">
      <MapGL
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        width="700px"
        height="700px"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
        />
      </MapGL>
      <div className="mapBox_control">
        <Box url={staticURL} show={true} />
      </div>
    </div>
  );
};
 
export default Maps;
