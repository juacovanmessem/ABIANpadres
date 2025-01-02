import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import validator from 'validator';

const Form = () => {
  // Estado para el formulario y errores
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
    telefono: '',
    curso: '',
  });
  const [errors, setErrors] = useState({});

  const formRef = useRef(null);

  // Función para validar los campos individualmente
  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value || !/^[a-zA-Z\s]+$/.test(value)) {
          return 'El nombre solo debe contener letras y espacios.';
        }
        break;
      case 'edad':
        if (!value || isNaN(value) || value <= 16 || value > 110) {
          return 'Por favor, ingresa una edad válida.';
        }
        break;
      case 'email':
        if (!value || !validator.isEmail(value)) {
          return 'Por favor, ingresa un correo electrónico válido.';
        }
        break;
      case 'telefono':
        if (!value || !/^[0-9]+$/.test(value) || value.length < 8 || value.length > 15) {
          return 'Por favor, ingresa un número de teléfono válido (8-15 dígitos).';
        }
        break;
      case 'curso':
        if (!value) {
          return 'Por favor, selecciona una opción.';
        }
        break;
      default:
        return '';
    }
  };

  // Manejo de cambios en los inputs y validación instantánea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validación del campo modificado y actualización de errores
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Validación de todos los campos antes de enviar el formulario
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario con validación final
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario completo
    if (!validateForm()) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, corrige los errores antes de enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }

    // Alerta de confirmación sobre la solicitud del título
    Swal.fire({
      title: 'Información Importante',
      text: 'Durante el proceso de inscripción, se solicitarán documentos adicionales como el Título Profesional en la Salud. ¿Tienes este documento o lo tendraas durante el proceso de inscripción?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, entiendo y podré proporcionar el título',
      cancelButtonText: 'No, no tengo el título',
    }).then((result) => {
      if (result.isConfirmed) {
        const formDataToSend = new FormData(formRef.current);
        const multipleEmails = `${formData.email}, admin@example.com`;
        formDataToSend.append('to_email', multipleEmails);

        emailjs.sendForm(
          'service_41hu3bz',  
          'template_zf7dv56', 
          formRef.current,  
          'IFaGqdO1JadyLLx8k' 
        )
        .then((result) => {
          Swal.fire({
            title: 'Éxito',
            text: 'El correo se ha enviado con éxito. Nos pondremos en contacto pronto.',
            icon: 'success',
            confirmButtonText: 'OK',
          });

          setFormData({
            nombre: '',
            edad: '',
            email: '',
            telefono: '',
            curso: '',
          });
          setErrors({});
        }, (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el correo. Por favor, intenta de nuevo más tarde.',
            icon: 'error',
            confirmButtonText: 'Cerrar',
          });
        });
      } else {
        Swal.fire({
          title: 'Proceso Cancelado',
          text: 'No se ha enviado el formulario.',
          icon: 'info',
          confirmButtonText: 'Cerrar',
        });
      }
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Nombre y Apellido</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`form-input ${errors.nombre ? 'is-invalid' : ''}`}
          required
        />
        {errors.nombre && <span className="error-text">{errors.nombre}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Edad</label>
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          className={`form-input ${errors.edad ? 'is-invalid' : ''}`}
          required
        />
        {errors.edad && <span className="error-text">{errors.edad}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'is-invalid' : ''}`}
          required
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Teléfono/Celular</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className={`form-input ${errors.telefono ? 'is-invalid' : ''}`}
          required
        />
        {errors.telefono && <span className="error-text">{errors.telefono}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Eres:</label>
        <select
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          className={`form-input ${errors.curso ? 'is-invalid' : ''}`}
          required
        >
          <option value="" disabled>Indicanos tu profesión</option>
          <option value="Bases biológicas para medicos">Médico/a</option>
          <option value="Bases biologicas para profesionales de la salud">Profesional de la salud</option>
          <option value="Bases biologicas para padres">Padre / Madre</option>
        </select>
        {errors.curso && <span className="error-text">{errors.curso}</span>}
      </div>
      <button type="submit" className="bttn-1">Enviar</button>
    </form>
  );
};

export default Form;
