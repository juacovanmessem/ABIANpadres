import './App.css'
import Hero from './components/Hero'
import SobreNosotros from './components/SobreNosotros'
import Contactos from './components/Contactos'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import Slider from './components/Slider'
import Pagos from './components/Pagos'
import WP from './components/Wp';


function App() {

  return (
    <>
      <div className='text-center lead'>
        <Hero/>
      </div>
      <section className='p-4 bg-1 text-white'>
        <div className='container-lg text-center my-2 p-4'>
          <h1 className='krona-one-regular'>Curso de bases biológicas </h1>
          <h5 className='krona-one-regular'>para Padres y Madres</h5>
          <p className='lead'>
          Si te interesa comprender cómo los sistemas biológicos influyen en el desarrollo neurológico y deseas aprender cómo la nutrición puede ser una herramienta clave para mejorar la salud de las personas con Trastornos del Espectro Autista (TEA), este curso es para ti.
          </p>
          <p className='lead'>
          Este curso está diseñado para brindarte conocimientos prácticos y teóricos, que te permitirán marcar una diferencia real en la calidad de vida de las personas con TEA
          </p>
          <p className='lead'>
            <strong>¡Inscríbete hoy y potencia tu práctica profesional con herramientas clave para el manejo del TEA desde un enfoque integral!</strong>
          </p>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          <button className='bttn-1 mx-4 my-2'><a href='https://drive.google.com/file/d/1j1dZG9XxjtISnVp0nWLGDPAccLnum6OT/view?usp=drive_link'>Ver programa completo</a></button>
          <button className='bttn-1 mx-4 my-2'><a href='#AboutUs'>Conoce a la academia</a></button>
          <button className='bttn-1 mx-4 my-2'><a href='#Pagos'>Inscribirme</a></button>
          <button className='bttn-1 mx-4 my-2'><a href="https://academiabian.com/">Ver mas cursos disponibles</a></button>
        </div>
      </section>
      <div className='container p-4 mt-4'>
        <div>
          <h2 className='krona-one-regular text-center my-3'>
            ¿Qué opinaron nuestros estudiantes?
          </h2>
        </div>
        <Slider />
      </div>
      <div id='Pagos'>
        <Pagos/>
      </div>
      <div id='AboutUs'>
        <SobreNosotros/>
      </div>
      <div>
        <PreguntasFrecuentes/>
      </div>
      <div className='container'>
        <Contactos/>
      </div>

      <div className='fixed-bottom-right'>
        <WP/>
      </div>
    </>
  )
}

export default App