import React from 'react';
import { Formik } from 'formik';

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
                    } 

                }}

                onSubmit={() => { }}>

                {( {values, errors, handleSubmit, handleChange, handleBlur}) => (
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
                            {errors.name && <div>
                                    <h4>Hay un error en el nombre</h4>
                                </div>}
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