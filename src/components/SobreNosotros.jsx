import React from 'react'
import PerfilDemo from '../assets/perfil.jpg'
import Cecilia from '../assets/cecilia.jpg'
import Graciela from '../assets/graciela.jpg'

function SobreNosotros() {
  return (
    <div className='bg-2 p-3 lead text-center'>
      <h2 className='text-center text-white krona-one-regular mb-2'>Sobre la Academia</h2>
      <p className='p-2 mx-4 text-white lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis itaque assumenda nobis, praesentium, ad dolor quam eligendi fugiat eaque nihil cum perspiciatis modi, exercitationem ullam magni expedita temporibus magnam.</p>
      <button className='bttn-1 mb-5'><a href='https://academiabian.com/'>Conoce más sobre la academia</a></button>

      <h2 className='text-center text-white krona-one-regular'>Sobre las profesoras</h2>
      <article className='row g-0 align-items-center p-3 mb-3 border rounded-pill bg-5-faded justify-content-center'>
        <img src={Cecilia} alt="" className='col-11 col-md-5 col-lg-3 img-fluid rounded-circle img-face'/>
        <div className='p-4 col text-md-start text-center'>
          <h3>Cecilia Fernández Aguirre</h3>
          <p className='p-4'>Bioquímica Nutricional con master en Suplementación Nutricional Funcional Avanzada, Master en Nutrigenómica Aplicada. Presidenta y co-fundadora de LINCA AC ( Liga de Intervención Nutrición Contra Autismo e Hiperactividad AC). Madre de un joven adulto con TEA.</p>
        </div>
      </article>
      <article className='row g-0 flex-wrap-reverse align-items-center p-3 border rounded-pill bg-5-faded justify-content-center'>
        <div className='p-4 col text-md-end text-center'>
          <h3>Graciela Estela Varela</h3>
          <p className='p-4'>Médica Funcional. Miembro del Comité Cientíco LINCA. Master en Microbiota Humana, Master en Fitoterapia aplicada. Miembro del Comité Cientíco LINCA. Directora de Espacio Vital, Argentina.</p>
        </div>
        <img src={Graciela} alt="" className='col-11 col-md-5 col-lg-3 img-fluid rounded-circle img-face'/>
      </article>
    </div>
  )
}

export default SobreNosotros