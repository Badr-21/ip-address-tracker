import "../styles/headerStyles/header.css";
import { IpInput } from "./IpInput";
import pattrenBg from "../assets/images/pattern-bg.png";

export function Header() {
   return (
      <header style={{ backgroundImage: `url(${pattrenBg})` }} className="header">
         <h1>IP Address Tracker</h1>
         <IpInput />
      </header>
   );
}
