export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const ADD_TO_MEMORY = 'ADD_TO_MEMORY';
export const MEMORY_DISPLAY = 'MEMORY_DISPLAY';


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const addToMemory = () => {
    return({type:ADD_TO_MEMORY});
}

export const memoryDisplay = () => {
    return({type:MEMORY_DISPLAY});
}