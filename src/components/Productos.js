import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';

const Productos = () => {
    
    // Mandar a llamar la accion principal para retornar los productos
    const dispatch = useDispatch();
    
    useEffect( () => {
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
    },[dispatch]);

    const loading   = useSelector( state => state.productos.loading );
    const error     = useSelector( state => state.productos.error );
    const productos = useSelector( state => state.productos.productos );
    
    return (
        <Fragment>
            { error 
            ?
                <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div> 
            :   null }
                

                <h2 className="text-center my-5">Listado de Productos</h2>

                <table className="table table-striped">
                    <thead className="bg-primary table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>   
                    </thead>
                    <tbody>
                        { productos.map( producto => {
                            return (
                                <Producto 
                                    key={producto.id}
                                    producto={producto}
                                />
                            )
                        })}
                        
                        
                    </tbody>
                </table>
                { loading ? 'Cargando...' : null}
        </Fragment>
    )
}

export default Productos
