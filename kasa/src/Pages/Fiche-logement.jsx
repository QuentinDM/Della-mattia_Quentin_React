import Navigation from "../components/Nav"

function Description() {
    // state (data)
    const pictures = JSON.parse(localStorage.getItem("thePictures")) ;
    //comportements
  
    //RENDER 
    return (
      <div>
        <ul >{pictures.map((picture) => (
            <Navigation  showPics={picture} />
        ))}</ul>
      </div>
    );
  };
  
  export default Description;
