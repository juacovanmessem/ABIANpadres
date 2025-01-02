import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Contactos() {
  const email = "abi.autismo.neurodesarrollo@gmail.com"; 

  const MySwal = withReactContent(Swal);

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(email).then(() => {
      MySwal.fire({
        icon: 'success',
        title: '¡Correo copiado!',
        text: 'El correo ha sido copiado al portapapeles.',
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(err => {
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo copiar el correo.',
      });
    });
  };
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-5 d-flex align-items-center" bis_skin_checked="1">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src="" alt="" />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary krona-one-regular">ABIAN</span>
        </div>

        <ul className="nav list-unstyled d-flex display-6">
          <li className="ms-3"><a className="text-body-secondary" href="https://www.youtube.com/channel/UCwJbBaf-CUTuhX9N1ukLssQ"><i class="bi bi-youtube"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/abian.academia"><i class="bi bi-instagram"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://wa.me/message/55CPK3SJXCLIP1"><i class="bi bi-whatsapp"></i></a></li>
          <li className="ms-3"><button onClick={copiarAlPortapapeles} className="text-body-secondary" href="#" style={{
          background: 'none',
          border: 'none',
          padding: '0',
          cursor: 'pointer',
        }}><i class="bi bi-envelope-at"></i></button></li>

        </ul>
      </footer>
    </>
  )
}

export default Contactos