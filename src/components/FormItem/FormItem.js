import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

const FormItem = () => {

    return (
        <>
            <Formik 
                initialValues={{
                    name: '',
                    mail: '',
                    phone: ''
                }}

                validate={(values) => {
                    let errors = {};

                    // if + validacion name=verificationName + errores.name = 'Los nombres no coinciden'
                    // validaciones de espacios vacios + alert con (!values.name)

                    if (!values.name){
                        errors.name = 'Por favor ingresa un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                        errors.name='Prueba de nuevo. El nombre solo puede contener letras y espacios'
                    }

                    if (!values.mail){
                        errors.mail = 'Por favor ingresa un mail'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
                        errors.mail='Prueba de nuevo. El mail solo puede contener letras, números, puntos, guiones y guión bajo'
                    }

                    return errors; 

                }}

                onSubmit={() => { }}>

                {( {values, errors, handleSubmit, handleChange, handleBlur, touched}) => (
                    <form action="" onSubmit={handleSubmit} className="formulario">
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                id="name"
                                value= {values.name}
                                onChange={handleChange}
                                onBlur= {handleBlur}
                            />
                            <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
                        </div>

                        <div>
                            <label htmlFor="mail">Mail</label>
                            <input
                                type="email"
                                name="mail"
                                placeholder="ejemplo@gmail.com"
                                id="mail"
                                value= {values.mail}
                                onChange={handleChange}
                                onBlur= {handleBlur}
                            />
                            <ErrorMessage name="mail" component={() => (<div className="error">{errors.mail}</div>)} />
                        </div>

                        <div>
                            <label htmlFor="phone">Número de telefono</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="351 0000 000"
                                id="phone"
                                value= {values.phone}
                                onChange={handleChange}
                                onBlur= {handleBlur}
                            />
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                )}

            </Formik>
        </>
    );
}

export default FormItem;