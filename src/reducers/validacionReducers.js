import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALIDAR_FORMULARIO_ERROR,
} from '../types';

// state inicial
const stateInicial = {
    error: false
}

export default function(state = stateInicial, action) {
    switch (action.type) {
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                error: false
            }
        
        case VALIDAR_FORMULARIO_EXITO:
            return {
                ...state,
                error: false
            }

        case VALIDAR_FORMULARIO_ERROR:
            return {
                ...state,
                error: true
            }
    
        default:
            return state;
    }
}