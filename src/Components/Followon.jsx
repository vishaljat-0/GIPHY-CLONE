import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Followon = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="linkedin.com/in/vishal9685">
        <CiLinkedin size={20} />
        </a>
        <a href='https://www.instagram.com/vishall_jat_0/?igsh=bW9sNGFsZmEzejBk#'>
          <FaInstagram size={20} />
        </a>
      
      </div>
    </div>
  );
};

export default Followon;