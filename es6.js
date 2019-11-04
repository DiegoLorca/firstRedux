// Reducers
const initialState = 0;

function counterReducer(state = initialState, action){
  switch (action.type) { //Aqui se evalua el tipo de accion
    case 'SUMAR':
      return state + 1;
    case 'RESTAR':
      return state - 1;
    default:
      return state;
  }
}

// Store
let store = Redux.createStore(counterReducer); // Esto nos crea nuestro almacenamiento, se tiene que pasar el reducers
store.subscribe(() => console.log(store.getState())); // Con el metodo subscribe estaremos pendiente a lo que suceda en nuestro estado.

// Actions
store.dispatch({ type: 'SUMAR' }); // Con dispatch se ejecuta una accion
store.dispatch({ type: 'SUMAR' });
store.dispatch({ type: 'SUMAR' });
store.dispatch({ type: 'RESTAR' });
