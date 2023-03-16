import { useContext, useEffect } from "react";
import { dataContext } from "../App";
import "../styles/ipOutputStyles/ipOutput.css";
export function IpOutput() {
   const { data } = useContext(dataContext);

   return (
      <section className="ip-output">
         <div className="ip-address">
            <h2>IP Address</h2>
            <p>{data?.success ? data.ip : "192.212.174.101"}</p>
         </div>
         <div className="location">
            <h2>Location</h2>
            <p>
               {data?.success
                  ? data.city + ", " + data.region + ", " + data.country
                  : "Brooklyn, NY 10001"}
            </p>
         </div>
         <div className="timezone">
            <h2>Timezone</h2>
            <p>{data?.success ? "UTC" + data.timezone.utc : "UTC-05:00"}</p>
         </div>
         <div className="isp">
            <h2>ISP</h2>
            <p>{data?.success ? data.connection.isp : "Space Starlink"}</p>
         </div>
      </section>
   );
}
