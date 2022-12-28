import { useEffect, useReducer, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './CalculatorApp.module.scss';
import reducerCalc from './reducer';
import { ACTION } from './action';
import ButtonDigit from './ButtonDigit';
import ButtonOperation from './ButtonOperation';

const cx = classNames.bind(styles);

const INTEGER_FORMATER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
});

const formatOperand = (operand) => {
    if (operand == null) return;
    const [integer, decimal] = operand.split('.');
    if (decimal == null) return INTEGER_FORMATER.format(integer);
    return `${INTEGER_FORMATER.format(integer)}.${decimal}`;
};

function CalculatorApp() {
    // eslint-disable-next-line no-unused-vars
    const [{ currentOperand, previousOperand, operation, isNegative = false }, dispatch] = useReducer(reducerCalc, {});

    const currentOperandRef = useRef();

    useEffect(() => {
        document.title = 'Calculator';
    }, []);

    useEffect(() => {
        const currentOperandLength = currentOperandRef.current.innerHTML.replaceAll(',', '').length;
        if (currentOperandLength > 11) {
            currentOperandRef.current.style.fontSize = `${4 - Math.round(currentOperandLength * 0.05)}rem`;
        } else {
            currentOperandRef.current.style.fontSize = '4.7rem';
        }
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('output')}>
                    <div className={cx('previous-operand')}>
                        {formatOperand(previousOperand) || ''} {operation}
                    </div>
                    <div
                        ref={currentOperandRef}
                        className={cx('current-operand')}
                    >
                        {formatOperand(currentOperand)}
                    </div>
                </div>
                <div className={cx('btn-list')}>
                    <button
                        onClick={() => dispatch({ type: ACTION.CLEAR })}
                        className={cx('btn-action', 'btn-two')}
                    >
                        AC
                    </button>
                    <button
                        onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}
                        className={cx('btn-action')}
                    >
                        DEL
                    </button>
                    <ButtonOperation
                        operation="÷"
                        dispatch={dispatch}
                    />
                </div>
                <div className={cx('btn-list')}>
                    <ButtonDigit
                        digit="7"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="8"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="9"
                        dispatch={dispatch}
                    />
                    <ButtonOperation
                        operation="*"
                        dispatch={dispatch}
                    />
                </div>
                <div className={cx('btn-list')}>
                    <ButtonDigit
                        digit="4"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="5"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="6"
                        dispatch={dispatch}
                    />
                    <ButtonOperation
                        operation="-"
                        dispatch={dispatch}
                    />
                </div>
                <div className={cx('btn-list')}>
                    <ButtonDigit
                        digit="1"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="2"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="3"
                        dispatch={dispatch}
                    />
                    <ButtonOperation
                        operation="+"
                        dispatch={dispatch}
                    />
                </div>
                <div className={cx('btn-list')}>
                    <button
                        onClick={() => dispatch({ type: ACTION.IS_NEGATIVE })}
                        className={cx('btn-action')}
                    >
                        ±
                    </button>
                    <ButtonDigit
                        digit="0"
                        dispatch={dispatch}
                    />
                    <ButtonDigit
                        digit="."
                        dispatch={dispatch}
                    />
                    <button
                        onClick={() => dispatch({ type: ACTION.EVALUATE })}
                        className={cx('btn-action')}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CalculatorApp;
