import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snack }) {
  return (
    <h4>
      <img
        className="heart"
        src={snack.is_healthy ? heartSolid : heartOutline}
        alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
      />
    </h4>
  );
}

export default HeartHealth;
