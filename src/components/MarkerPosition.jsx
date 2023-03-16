import { useContext, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { dataContext } from "../App";
import icon from "./Icon";

export function MarkerPosition({ coordinates }) {
   const { data } = useContext(dataContext);
   const map = useMap();

   useEffect(() => {
      map.flyTo(coordinates, 13, {
         animate: true,
      });
   }, [map, data]);
   return (
      <>
         <Marker icon={icon} position={coordinates}>
            <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
         </Marker>
      </>
   );
}
