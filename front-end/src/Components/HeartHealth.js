import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snack }) {
  return (
    <div className="heartHealthy">
      <p>
        {snack.is_healthy 
        ? ( <img src={heartSolid} alt="healthy food" /> ) 
        : ( <img src={heartOutline} alt="unhealthy food" /> )
        }
      </p>
    </div>
  );
}

export default HeartHealth;
