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

// Cada reducer tiene un state
const initialState = {
    productos: [],
    error: false,
    loading: false,
    producto:{}
}

export default function(state= initialState, action) {
    switch (action.type) {

        case AGREGAR_PRODUCTO:
            return {
                ...state,
            }

        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }

        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: true,
            }

        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true
            }

        case DESCARGA_PRODUCTOS_EXITOSA:
            return {
                ...state,
                productos: action.payload,
                error:false,
                loading:false,
                producto:{}
            }

        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                productos: [],
                loading: false,
                error: true,
                producto:{}
            }

        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
            }

        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                loading: false,
                error: false,
                productos: state.productos.filter( producto => producto.id !== action.payload )
            }

        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                error: true
            }

        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                error: false
            }

        case PRODUCTO_EDITAR_EXITO:
            return {
                ...state,
                error: false,
                producto: action.payload
            }

        case PRODUCTO_EDITAR_ERROR:
            return {
                ...state,
                error: true
            }

        case ACTUALIZAR_PRODUCTO:
            return {
                ...state,
                error: false
            }

        case ACTUALIZAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: false,
                productos: state.productos.map( producto => producto.id === action.payload.id ? producto = action.payload : producto ),
                producto: {} 
            }

        case ACTUALIZAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: true,
                producto: {}
            }
        
        default:
            return state;
    }
}
