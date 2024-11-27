export default function Form({ isModal }) {
  return (
    <form className={`d-flex ${isModal ? 'flex-column align-items-center w-100' : 'justify-content-around align-items-center'}`}>
      <div className={`form-group ${isModal ? 'mb-5 w-75' : 'me-2'}`} style={{ width: isModal ? '100%' : '40%' }}>
        <input
          type="text"
          className="form-control form-control-md p-3 rounded-4"
          placeholder="Nombre Completo"
        />
      </div>
      <div className={`form-group ${isModal ? 'mb-5 w-75' : 'me-2'}`} style={{ width: isModal ? '100%' : '40%' }}>
        <input
          type="email"
          className="form-control form-control-md p-3 rounded-4"
          placeholder="@Email"
        />
      </div>
      <div className={`d-flex ${isModal ? 'justify-content-end w-75' : ''}`} style={{ width: isModal ? '100%' : 'auto' }}>
        <button
          type="submit"
          className="btn btn-primary p-3 rounded-4 border-0"
          style={{ backgroundColor: "#41C6CE", width: isModal ? '30%' : '10vw' }}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}