import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { dataContext } from "../App";
import { useContext } from "react";
import { MarkerPosition } from "./MarkerPosition";
export function Map() {
   const { data } = useContext(dataContext);
   const coordinates = data?.success ? [data.latitude, data.longitude] : [34.0805651, -118.072846];

   return (
      <div className="map">
         <MapContainer
            style={{
               width: "100vw",
               height: "calc(100vh - 16rem)",
               position: "relative",
               zIndex: "1",
            }}
            center={coordinates}
            zoom={13}
            scrollWheelZoom={true}
         >
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerPosition coordinates={coordinates} />
         </MapContainer>
      </div>
   );
}
