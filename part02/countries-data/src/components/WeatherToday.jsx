/* eslint-disable react/prop-types */
import { IoSunnySharp } from "react-icons/io5";
import { IoPartlySunnySharp } from "react-icons/io5";
import { BsCloudFog2 } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { IoThunderstormSharp } from "react-icons/io5";

function WeatherToday({ weathercode }) {
  const code = weathercode[0];

  if (code === 0 || code === 1) {
    const jsx = <IoSunnySharp />;
    return jsx;
  }
  if (code === 2 || code === 3) {
    const jsx = <IoPartlySunnySharp />;
    return jsx;
  }
  if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 56 ||
    code === 57 ||
    code === 61 ||
    code === 63 ||
    code === 65 ||
    code === 66 ||
    code === 67 ||
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    const jsx = <BsFillCloudRainHeavyFill />;
    return jsx;
  }
  if (code === 45 || code === 48) {
    const jsx = <BsCloudFog2 />;
    return jsx;
  }
  if (
    code === 71 ||
    code === 73 ||
    code === 75 ||
    code === 77 ||
    code === 85 ||
    code === 86
  ) {
    const jsx = <FaRegSnowflake />;
    return jsx;
  }
  if (code === 95 || code === 96 || code === 99) {
    const jsx = <IoThunderstormSharp />;
    return jsx;
  }

  return <>{}</>;
}

export default WeatherToday;
