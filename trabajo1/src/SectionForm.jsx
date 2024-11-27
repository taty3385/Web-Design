import { useState } from "react";
import fondo from "./assets/fondo.png";
import Form from "./Form";

export default function SectionForm() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "40vh",
      }}
    >
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
       
        <div className="w-100 ">
         
          <p
            className="text-start ms-3 fs-4 fw-normal d-none d-md-block"
            style={{
              color: "#3A453C",
              fontFamily: "Poppins, sans-serif",
              width: "98%",
            }}
          >
            Contacta
          </p>

          
        <div className="d-md-none d-flex justify-content-center">
            <button
              className="btn btn-primary p-3 rounded-4 w-50"
              style={{ backgroundColor: "#41C6CE", fontFamily: "Poppins" }}
              onClick={toggleModal}
            >
              Contacta
            </button>
          </div>
        </div>

        <div className="d-none d-md-block w-100">
          <Form />
        </div>

        {showModal && (
          <div
            className="modal show"
            style={{
              display: "flex",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "gray",
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={toggleModal}
          >
            <div
              className="modal-content p-2 rounded-4 w-100 vh-100 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cruz para cerrar el modal */}
              <button
                onClick={toggleModal}
                style={{
                  position: "absolute",
                  top: "15%",
                  right: "10px",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-times"></i>
              </button>

              <Form isModal={true} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
