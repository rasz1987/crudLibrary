import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
    ACTUALIZAR_PRODUCTO,
    ACTUALIZAR_PRODUCTO_EXITO,
    ACTUALIZAR_PRODUCTO_ERROR
} from '../types';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';

// Crear un nuevo producto - función principal
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( nuevoProducto() );

        // Insertar en la api
        clienteAxios.post('/libros', producto)
            .then( respuesta => {
                // si se guarda correctamente
                dispatch( agregarProductoExito( producto ) );
            })
            .catch( error => {
                // Si hay un error
                dispatch( agregarProductoError() );
            });
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

export const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR
});

// Obtener listado de productos (consultar API)
export function obtenerProductosAction() {
    return dispatch => {
        dispatch( comenzarDescarga() );

        // consultar API
        clienteAxios.get('/libros')
            .then(response => {
                dispatch( descargaExitosa(response.data) );
            })
            .catch(error => {
                dispatch( descargaError() );
            });
    }
}

export const comenzarDescarga = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
});
export const descargaExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
});
export const descargaError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
});

// Eliminar producto
export function eliminarProductoAction(id) {
    return dispatch => {
        dispatch(obterProductoEliminarAction());

        // Consultar api
        clienteAxios.delete(`/libros/${id}`)
            .then(response => {
                dispatch( eliminarExito( id ) );
            })
            .catch(error => {
                dispatch( eliminarError() );
            })
    }
}

export const obterProductoEliminarAction = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
})
export const eliminarExito = id => ({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: id
})
export const eliminarError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR
})

// Editar producto
export function editarProductoAction(id) {
    return dispatch => {
        dispatch(obtenerProductoEditar());

        // Consultar api
        clienteAxios.get(`/libros/${id}`)
            .then( response => {
                dispatch(editarExito(response.data));
            })
            .catch( error => {
                dispatch(editarError());
            })
    }
}

export const obtenerProductoEditar = () => ({
    type: OBTENER_PRODUCTO_EDITAR
})
export const editarExito = producto => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})
export const editarError = () => ({
    type: PRODUCTO_EDITAR_ERROR
})

// Actualizar producto
export function actualizarProducto( producto ) {
    return (dispatch) => {
        dispatch(updateProducto());

        // Actualizar en API
        clienteAxios.put(`/libros/${producto.id}`, producto)
            .then( response => {
                dispatch( actualizarExito(response.data) );

                Swal.fire(
                    'Almacenado',
                    'El producto se actualizó correctamente',
                    'success'
                );
            })
            .catch( error => {
                dispatch( actualizarError() );
            })
    }
}

export const updateProducto = () => ({
    type: ACTUALIZAR_PRODUCTO
});
export const actualizarExito = producto => ({
    type: ACTUALIZAR_PRODUCTO_EXITO,
    payload: producto
});
export const actualizarError = () => ({
    type: ACTUALIZAR_PRODUCTO_ERROR
});

    
    