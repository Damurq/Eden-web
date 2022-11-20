import React from 'react'
import { Formik } from 'formik';
import { AiOutlineSend } from 'react-icons/ai'
// Style
import './ContactForm.css'

const ContactForm = () => {

    return (
        <Formik
            initialValues={{ email: '', project: '', name: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Requerido'
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Email invalido'
                }
                if (!values.project) {
                    errors.project = 'Requerido'
                }
                if (!values.name) {
                    errors.name = 'Requerido'
                }
                if (!values.message) {
                    errors.message = 'Requerido'
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                alert("Enviado")
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content theme--3">
                            <label htmlFor="name" className="contact__label">Nombre</label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                type="text"
                                className="contact__input theme--3" id='name' />
                            <p className="error">
                                {errors.name && touched.name && errors.name}
                            </p>
                        </div>
                        <div className="contact__content theme--3">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type="email"
                                className="contact__input theme--3" />
                            <p className="error">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                        <div className="contact__content theme--3">
                            <label htmlFor="message" className="contact__label">Mensaje</label>
                            <textarea
                                id="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                name="message" cols="0" rows="7" className="contact__input theme--3"></textarea>
                            <p className="error">
                                {errors.message && touched.message && errors.message}
                            </p>
                        </div>
                        <div className='container-button--contact'>
                        <button type="submit" className='button button--flex button--contact' disabled={isSubmitting}>
                            Enviar mensaje
                            <AiOutlineSend className="uil button__icon" />
                        </button>
                    </div>
                    </div>
                    
                </form>
            )}
        </Formik>)
}

export default ContactForm