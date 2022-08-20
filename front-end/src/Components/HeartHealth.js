import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (


    <>
    
      {snackHealth 
          ? <span> <img src={heartSolid}></img> </span> 
          : <span> <img src={heartOutline}></img> </span>}
    </>
  );
}

export default HeartHealth;
