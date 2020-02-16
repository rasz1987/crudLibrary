import React, { useState } from 'react';

// Redux
import { crearNuevoProductoAction } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';
import { useDispatch, useSelector } from 'react-redux';


const NuevoProducto = ({history}) => {
    
    // state
    const [name, setName]   = useState('');
    const [price, setPrice] = useState('');
    
    // Crear nuevo producto
    const dispatch          = useDispatch();
    const agregarProducto   = (producto) => dispatch( crearNuevoProductoAction(producto) );
    const validarFormulario = () => dispatch( validarFormularioAction() );
    const exitoValidacion   = () => dispatch( validacionExito() );
    const errorValidacion   = () => dispatch( validacionError() );

    // obtener datos del state
    const error = useSelector( (state) => state.error.error );

    // Agregar producto
    const submitProduct = e => {
        e.preventDefault();

        // Validar Formulario
        validarFormulario();
        if (name === '' || price === '') {
            errorValidacion();
            return;
        };
        exitoValidacion();
        
        // guardar datos
        agregarProducto( { name, price } );

        // redireccionar
        history.push('/');
    };
    

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={submitProduct}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type        = "text"
                                    className   = "form-control"
                                    placeholder = "Nombre Libro"
                                    value       = { name }
                                    onChange    = { e => setName(e.target.value) }
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type        = "text"
                                    className   = "form-control"
                                    placeholder = "Precio Libro"
                                    value       = { price }
                                    onChange    = { e => setPrice( e.target.value ) }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                    
                    { error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div> : null }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;
