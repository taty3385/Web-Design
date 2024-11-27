
import Footer from "./Footer";
import Header from "./Header";
import image from "./assets/images.jpg";
import imageCerdo from "./assets/imagesCerdo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'; 

export default function Section() {
  return (
    <>
      <div className=" w-75 d-flex justify-content-end me-5 d-none d-md-flex">
        <p className="text-end text-white fw-bold m-0">Ver online</p>
      </div>
      <div className="d-flex justify-content-center align-items-center min-vh-100 " >
        <section className=" responsive-section bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <Header />
          <div className="d-flex flex-column mb-5">
            <p className="text-left w-100 m-0 ps-5">
              Bienvenidos a <span className="fw-bold">agriNews Campus</span>,
            </p>
            <p className="text-left w-100 m-0 ps-5">
              Desde hoy puede consultar su perfil al link siguiente.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn custom-button p-2 rounded-5 fw-bold text-white"
              style={{ backgroundColor: "rgb(65,198,206)" }}
            >
              Mi perfil
            </button>
          </div>
          <article className="d-flex flex-column flex-md-row justify-content-around align-items-center mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center w-50 w-md-25 mb-3 mb-md-0">
              <img
                src={image}
                alt=""
                className="img-fluid rounded-1 mb-2"
                style={{ height: "120px",width:"75%", objectFit: "cover" }}
              />
              <p className="text-center p-1">
                Apúntese al 3 curso de incubación desde hoy
              </p>
              <a
                href=""
                className="text-center text-decoration-none fw-bold text-dark"
              >
                Ver Más <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-50 w-md-25 mb-3 mb-md-0">
              <img
                src={imageCerdo}
                alt=""
                className="img-fluid rounded-1 mb-4"
                style={{ height: "120px", width:"75%", objectFit: "cover" }}
              />
              <p className="text-center p-1">50 aniversario del cerdo ibérico</p>
              <a
                href=""
                className="text-center text-decoration-none fw-bold text-dark"
              >
                Ver Más <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
          <Footer />
        </section>
      </div>
      <div className="d-flex justify-content-center mt-4 d-none d-md-flex">
        <p className="text-center fw-bold fs-6 text-white">Cancelar suscripción</p>
      </div>
    </>
  );
}
