// Reducers
const initialState = 0;

function counterReducer(state = initialState, action){
  switch (action.type) { //Aqui se evalua el tipo de accion
    case 'SUMAR':
      return state ++;
    case 'RESTAR':
      return state --;
    default:
      return state;
  }
}

// Store
let store = Redux.createStore(counterReducer); // Esto nos crea nuestro almacenamiento, se tiene que pasar el reducers
console.log(store.getState());
// Actions
