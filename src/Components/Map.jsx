import React, { useState, useEffect, useMemo } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../App.css";
import { MarkerF } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  //-24.81915816428887, -65.4284392754407
  const centerMap = useMemo(
    () => ({ lat: -24.80915816428887, lng: -65.4284392754407 }),
    []
  );

  const center = useMemo(
    () => ({ lat: -24.81915816428887, lng: -65.4284392754407 }),
    []
  );

  /* const centerMarker = useMemo(
    () => ({ lat: -24.81915816428887, lng: -65.4284392754407 }),
    []
  ); */

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="divMapa">
      <GoogleMap
        zoom={14}
        center={centerMap}
        mapContainerClassName="map-container"
        mapTypeId="roadmap"
      >
        <MarkerF position={center} key="Prueba" />
      </GoogleMap>
    </div>
  );
};

export default Map;
