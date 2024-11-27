import trabajoImage from "./assets/trabajo.jpg";
import '../src/style.css'

export default function Card() {
  return (
    <div
      className="card rounded-4 card-zoom"
      style={{
        width: "11rem",
        backgroundImage: `url(${trabajoImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <div
        className="card-body rounded-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",  
          color: "white", 
        }}
      >
        <h5 className="card-title text-center" style={{ color: "#41C6CE", fontFamily: "Poppins" }}>
          Cápsulas
        </h5>
        <p className="card-text text-white " style={{ fontFamily: "Poppins", fontSize:"0.9rem" }}>
          3° Edición Curso de especialización en incubación
        </p>
        <div className="d-flex justify-content-center w-100">
          <button className="btn btn-primary w-75 bg-light border-0 fw-bold" style={{ color: "#41C6CE",fontFamily: "Poppins",fontSize:"0.7rem"}}>
            30 uS$
          </button>
        </div>
      </div>
    </div>
  );
}

