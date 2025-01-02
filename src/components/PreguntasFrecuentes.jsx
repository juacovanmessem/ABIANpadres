import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function PreguntasFrecuentes() {
  return (
    <section className='pb-5 pt-3 mb-4'>
      <div className='container-sm'>
        <div className='krona-one-regular my-4 fw-bold text-center'>
          <h2>Preguntas frecuentes</h2>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Quiénes pueden participar en los cursos?</Accordion.Header>
            <Accordion.Body>
              <p>Este curso está diseñado especialmente para padres, madres, familiares o cuidadores de personas con autismo, sin necesidad de experiencia previa en el ámbito médico o terapéutico.</p>
              <p>Con un enfoque accesible y práctico, aprenderás sobre el síndrome autista, el neurodesarrollo y herramientas clave para apoyar a tus seres queridos en su vida diaria.</p>
              <p>¡Todos son bienvenidos a formar parte de esta experiencia de aprendizaje inclusiva y transformadora! 🌟</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Cómo puedo inscribirme en un curso?</Accordion.Header>
            <Accordion.Body>
              <p>Para completar tu inscripción, por favor envía un correo electrónico a abi.autismo.neurodesarrollo@gmail.com adjuntando la siguiente documentación (escaneada):🔹 DNI (frente y dorso).</p>
              <p>Tambien puedes completar el formulario de inscripción y nosotros nos pondremos en contacto contigo.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Cuál es la duración de los cursos?</Accordion.Header>
            <Accordion.Body>
              Duración de 3 meses. La clases son enviadas cada 15 días.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>¿Qué sucede si no puedo asistir a una sesión programada?</Accordion.Header>
            <Accordion.Body>
              <p>Las clases son de manera asincrónica. Puedes realizarlo a tu propio ritmo.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  )
}

export default PreguntasFrecuentes