import "./widgets.scss";
import ThermostatIcon from '@mui/icons-material/Thermostat';


const Widgets = ({ title, value, unit, date }) => {
  return (
    <div className="widget">
        <div className="left">
            <span className="Temperature">{title}</span>
            <span className="counter">{value}{unit} </span>
            <span className="link">{date}</span>
            
        </div>
        <div className="right">
            <div className="percentage positive">
               
            </div>
            <ThermostatIcon className="icon"
            style={{ color:"#0971B8",
            backgroundColor: "rgba(9,113,184,0.3)"
            }}/>
        </div>
    </div>
  );
}

export default Widgets;