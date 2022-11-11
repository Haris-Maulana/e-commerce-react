import { FaWhatsapp } from "react-icons/fa";
import './Whatsapp.scss'

const Whatsapp = () => {
  return (
    <div className="whatsapp-container">
    <div className="whatsapp">
      <FaWhatsapp className="icons-wa" />
      <a href="https://wa.me/6281386329291">Say Hello To Me </a>
    </div>
  </div>
  );
}
 
export default Whatsapp;