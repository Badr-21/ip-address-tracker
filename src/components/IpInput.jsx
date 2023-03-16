import { useContext, useState } from "react";
import axios from "axios";
import "../styles/ipInputStyles/ipInput.css";
import { dataContext } from "../App";
import arrow from "../assets/images/icon-arrow.svg";

export function IpInput() {
   const regex =
      /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/;
   const { setData } = useContext(dataContext);
   const [ip, setIp] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (regex.test(ip)) {
         const fetchData = async () => {
            try {
               await axios
                  .get(`http://ipwho.is/${ip}`)
                  .then((response) => response.data)
                  .then((result) => {
                     setData(result);
                  });
            } catch (error) {
               console.error(error);
            }
         };
         fetchData();
      } else {
         alert("Enter a valid IP");
      }
   };

   const handleInput = (e) => {
      setIp(e.target.value);
   };

   return (
      <form className="ip-input">
         <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={ip}
            onChange={handleInput}
         />
         <button
            style={{ backgroundImage: `url(${arrow})` }}
            type="submit"
            onClick={handleSubmit}
         ></button>
      </form>
   );
}
