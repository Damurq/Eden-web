import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './Comment.css';

const initialValues = {
    name: '',
    age: '',
    isMember: false,
    comment: '',
}

const renderComments = (comments) => {
    return comments.map((comment, index) => (
        <div key={index} className="comments__item">
            <p><strong>Nombre: </strong>{comment.name}</p>
            <p><strong>Edad: </strong>{comment.age}</p>
            <p><strong>Socio: </strong>{comment.isMember ? 'Sí' : 'No'}</p>
            <p><strong>Comentario: </strong>{comment.comment}</p>
            <hr />
        </div>
    ))
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("El campo nombre es requerido"),
    age: Yup.number().required("El campo edad es requerido").positive("La edad debe ser un número positivo"),
    comment: Yup.string().required("El campo comment es requerido"),
});

function Comment() {
    const [comments, setComments] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        setComments([...comments, values]);
        resetForm();
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="form">
                        <Field
                            className="form__field"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                        />
                        <ErrorMessage component="div" name="name" className="error" />
                        <Field
                            className="form__field"
                            type="number"
                            name="age"
                            placeholder="Edad"
                        />
                        <ErrorMessage component="div" name="age" className="error" />
                        <div className="form__field form__field--checkbox">
                            <Field
                                type="checkbox"
                                name="isMember"
                            />Es socio
                        </div>
                        <Field
                            className="form__field form__field--textarea"
                            as="textarea"
                            name="comment"
                            placeholder="Deja tu comentario"
                        />
                        <ErrorMessage component="div" name="comment" className="error" />
                        <button className="form__button" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
            <div className="comments">
                {renderComments(comments)}
            </div>
        </>
    );
}

export default Comment;