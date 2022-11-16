import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormItem = () => {

    const {formularioEnviado, setFormularioEnviado} = useState(false)

    return (
        <>
            <Formik 
                initialValues={{
                    name: '',
                    lastname:'',
                    mail: '',
                    validationMail: '',
                    phone: ''
                }}

                validate={(values) => {
                    let errors = {};
                    if (!values.name){
                        errors.name = 'Por favor ingresa un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                        errors.name='Prueba de nuevo. El nombre solo puede contener letras y espacios.'
                    }

                    if (!values.lastname){
                        errors.lastname = 'Por favor ingresa un apellido'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)){
                        errors.lastname='Prueba de nuevo. El apellido solo puede contener letras y espacios.'
                    }

                    if (!values.mail){
                        errors.mail = 'Por favor ingresa un mail'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
                        errors.mail='Prueba de nuevo. El mail solo puede contener letras, números, puntos, guiones y guión bajo.'
                    }

                    if (!values.validationMail){
                        errors.validationMail = 'Por favor ingresa un email'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.validationMail)){
                        errors.validationMail='Prueba de nuevo. El mail solo puede contener letras, números, puntos, guiones y guión bajo.'
                    }

                    if (values.mail != values.validationMail){
                        errors.validationMail = 'Prueba de nuevo. Los emails no coinciden.'
                    }

                    if (!values.phone){
                        errors.phone = 'Por favor ingresa un número de telefono.'
                    } else if(!/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/.test(values.phone)){
                        errors.phone='Prueba de nuevo. El campo solo puede contener números.'
                    }

                    return errors; 

                }}

                

                onSubmit={(values, {resetForm}) => {

                    resetForm();
                    setFormularioEnviado(true);
                    setTimeout(() => setFormularioEnviado(false), 5000)

                 }}>
                

                {( {values, errors,  handleChange, handleBlur, touched}) => (
                    <div>
                    <Form action="" className="formulario">
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
                            <label htmlFor="lastname">Apellido</label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Apellido"
                                id="lastname"
                                value= {values.lastname}
                                onChange={handleChange}
                                onBlur= {handleBlur}
                            />
                            <ErrorMessage name="lastname" component={() => (<div className="error">{errors.lastname}</div>)} />
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
                            <label htmlFor="validationMail">Por favor repita su email</label>
                            <input
                                type="email"
                                name="validationMail"
                                placeholder="ejemplo@gmail.com"
                                id="validationMail"
                                value= {values.validationMail}
                                onChange={handleChange}
                                onBlur= {handleBlur}
                            />
                            <ErrorMessage name="validationMail" component={() => (<div className="error">{errors.validationMail}</div>)} />
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
                            <ErrorMessage name="phone" component={() => (<div className="error">{errors.phone}</div>)} />

                        </div>


                        <button disabled={errors.lenght> 0 ? true : false} type="submit">Enviar</button>
                    </Form>
                    
                    {formularioEnviado && <p>Hemos recibido tu pedido! Nos pondremos en contacto a la brevedad.</p>}
                     </div>
                )}

            </Formik>
        </>
    );
}

export default FormItem;