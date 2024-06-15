import "./CardEcho.css";
import DivSubStatus from "./DivSubStatus";

const CardEcho = () => {
  return (
    <div className="cards-echo">
      <p>9.3</p>
      <select></select>
      <div>
        <div className="echo-img">echo</div>
      </div>
      <DivSubStatus />
      <DivSubStatus />
      <DivSubStatus />
      <DivSubStatus />
      <DivSubStatus />
    </div>
  )
}

export default CardEcho