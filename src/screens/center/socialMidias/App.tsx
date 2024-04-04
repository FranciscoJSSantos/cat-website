import { FaInstagram, FaTiktok } from "react-icons/fa";

function SocialMidias() {
  return (
    <>
      <div className="flex justify-between w-full sm:w-1/3">
        <FaTiktok
          href="/"
          className="hover:scale-150 transition-all duration-300 cursor-pointer text-white w-8 h-8 rotate-[-45deg] ml-6 sm:mr-16"
        />
        <FaInstagram
          href="/"
          className="hover:scale-150 transition-all duration-300 cursor-pointer text-pink-500 w-8 h-8 rotate-45 mr-6 sm:mr-16"
        />
      </div>
    </>
  );
}

export default SocialMidias;
