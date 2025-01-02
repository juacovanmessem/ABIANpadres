import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../components/Form'

function Pagos() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <section className='bg-1 p-4 text-white'>
      <div className='my-3'>
        <h2 className='krona-one-regular text-center'>Precios</h2>
        <div className='row g-0 justify-content-evenly my-3'>
          <div className='col-10 col-md-5 border p-3'>
            <p className='text-center'><strong>Formación para Padres, Madres y fammiliares</strong></p>
            <p>El valor del curso es:</p>
            <p>🇦🇷 Argentina: U$D $$$</p>
            <p>🌎 Latinoamérica / EEUU / Europa: U$D $$$</p>
          </div>
        </div>
      </div>
      <div className='my-3'>
        <h2 className='krona-one-regular text-center'>Medios de pago</h2>
        <div className='container lead'>
          <p className='text-center'>Para el pago en Argentina, puedes abonar en pesos argentinos mediante transferencia bancaria. Para el pago en dólares, tienes la opción de hacerlo a través de Western Union, Zelle o Paypal (comisiones a su cargo) Se toma el valor del dolar blue del momento. </p>
        </div>
      </div>
      <div className='text-center'>
        <Button variant="primary" onClick={handleShow} className='bttn-3'>
          Inscribete ahora
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Formulario de inscripción</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form/>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  )
}

export default Pagos