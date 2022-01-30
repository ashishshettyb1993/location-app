import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ReactMapGL, {
  FlyToInterpolator, Marker, NavigationControl,
  Popup
} from "react-map-gl";
import { MapStyle } from "../components/types";

const REACT_MAPBOX_TOKEN =
  "pk.eyJ1IjoiYXNoaXNoc2hldHR5MDA0IiwiYSI6ImNreXljOWtzdjBreGIydnF2b2Iyem9tZ3QifQ.AQVw2klHfUBH8hSW8cpT3Q";

const navControlStyle = {
  right: 10,
  top: 10
};

export function Map(props) {
  const { defaultMapStyle = MapStyle.Japan, data=[], selectedTrip } = props;

  const [viewport, setViewport] = useState({
    latitude: 35.68,
    longitude: 139.767,
    zoom: 11,
    bearing: 0,
    pitch: 0
  });

  const [selectedTripData, setSelectedTripData] = useState(null);

  useEffect(
    () => {
      if (selectedTrip) {
        const coordinates = data.filter(
          x => x.properties.ID === selectedTrip
        )[0].geometry.coordinates;
        setViewport({
          latitude: coordinates[1],
          longitude: coordinates[0],
          zoom: 11,
          transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
          transitionDuration: "auto"
        });
        setSelectedTripData(
          data.filter(x => x.properties.ID === selectedTrip)[0]
        );
      } else {
        setSelectedTripData(undefined);
      }
    },
    [selectedTrip, data]
  );

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="50vw"
        height="58vh"
        mapboxApiAccessToken={REACT_MAPBOX_TOKEN}
        onViewportChange={setViewport}
        mapStyle={defaultMapStyle}
      >
        <NavigationControl style={navControlStyle} />
        {data.map(trip =>
          <Marker
            key={trip.properties.ID}
            latitude={trip.geometry.coordinates[1]}
            longitude={trip.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={() => {
                setSelectedTripData(trip);
              }}
            >
              <FaMapMarkerAlt
                size={trip.properties.ID === selectedTrip ? 25 : 15}
                color={trip.properties.ID === selectedTrip ? "red" : undefined}
              />
            </button>
          </Marker>
        )}
        {selectedTripData
          ? <Popup
              latitude={selectedTripData.geometry.coordinates[1]}
              longitude={selectedTripData.geometry.coordinates[0]}
              onClose={() => {
                setSelectedTripData(null);
              }}
            >
              <div>
                <h2>
                  {selectedTripData.properties.NAME}
                </h2>
                <p>
                  {selectedTripData.properties.ADDRESS}
                </p>
                <p>
                  {selectedTripData.properties.NAME_JP}
                </p>
                <p>
                  {selectedTripData.properties.FROM_DATE
                    .toISOString()
                    .substring(0, 10)}
                  {" ~ "}
                  {selectedTripData.properties.END_DATE
                    .toISOString()
                    .substring(0, 10)}
                </p>
              </div>
            </Popup>
          : null}
      </ReactMapGL>
    </div>
  );
}
