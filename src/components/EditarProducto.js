import React, { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction, actualizarProducto } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';

const EditarProducto = ({ history, match }) => {

    // Crear los ref
    const nameRef  = useRef('');
    const priceRef = useRef('');

    const dispatch = useDispatch();
    const editarProducto = producto => { dispatch( actualizarProducto(producto) ) };
    const validarForm = () => { dispatch( validarFormularioAction() )};
    const validateSuccess = () => { dispatch( validacionExito() )};
    const validateError = () => { dispatch( validacionError() )};

    // Obtener id al editar
    const { id } = match.params;
    
    useEffect(() => {
        dispatch(editarProductoAction(id));
    }, [dispatch, id])

    // acceder al state
    const producto = useSelector( state => state.productos.producto );
    const error    = useSelector( state => state.error.error);

    // Cuando carga la api
    if (!producto) return 'Cargando...';

    // Actualizar Producto
    const updateProducto = e => {
        e.preventDefault();

        // Validar el formulario
        validarForm();
        if (nameRef  === '' || priceRef === '') {
            validateError();
            return;
        }
        
        // no hay error
        validateSuccess();

        // Guardar los cambios
        editarProducto({
            id,
            name: nameRef.current.value, 
            price: priceRef.current.value
        });

        // Redireccionar
        history.push('/');
    }

    return (
        
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Producto</h2>
                        <form
                            onSubmit={updateProducto}
                        >
                            <div className="form-group">
                                <label>Titulo</label>
                                <input 
                                    type         = "text"
                                    className    = "form-control"
                                    placeholder  = "Titulo"
                                    defaultValue = {producto.name}
                                    ref          = {nameRef}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input 
                                    type         = "text"
                                    className    = "form-control"
                                    placeholder  = "Precio"
                                    defaultValue = {producto.price}
                                    ref          = {priceRef}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>

                        { error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error, intente de nuevo </div> : null }
                    
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default EditarProducto;
