import { ACTION } from './action';

const reducerCalc = (state, { type, payload }) => {
    switch (type) {
        case ACTION.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: payload.digit,
                };
            }
            if (state.currentOperand?.length === 12) return state;
            if (payload.digit === '0' && state.currentOperand === '0') return state;
            if (payload.digit === '.' && state.currentOperand?.includes('.')) return state;

            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`,
            };
        case ACTION.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) return state;
            if (state.previousOperand == null) {
                return {
                    ...state,
                    isNegative: false,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                };
            }
            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                };
            }

            return {
                ...state,
                isNegative: false,
                operation: payload.operation,
                previousOperand: evalute(state),
                currentOperand: null,
            };
        case ACTION.CLEAR:
            return {};
        case ACTION.DELETE_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                };
            }
            if (state.currentOperand == null) return state;
            if (state.currentOperand.length === 1) {
                return { ...state, currentOperand: null };
            }
            if (state.currentOperand.length === 2 && state.currentOperand.includes('-')) {
                return { ...state, currentOperand: null };
            }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        case ACTION.IS_NEGATIVE:
            if (state.currentOperand == null || state.currentOperand === '0') return state;
            if (state.isNegative) {
                return {
                    ...state,
                    isNegative: !state.isNegative,
                    currentOperand: `${state.currentOperand.slice(1)}`,
                };
            }

            return {
                ...state,
                isNegative: !state.isNegative,
                currentOperand: `-${parseFloat(state.currentOperand)}`,
            };
        case ACTION.EVALUATE:
            if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
                return state;
            }
            return {
                ...state,
                overwrite: true,
                operation: null,
                previousOperand: null,
                currentOperand: evalute(state),
            };
        default:
            return state;
    }
};

const evalute = ({ operation, previousOperand, currentOperand }) => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    let computation = '';
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            break;
    }
    return computation.toString();
};

export default reducerCalc;
