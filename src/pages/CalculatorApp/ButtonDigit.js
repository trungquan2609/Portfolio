import classNames from 'classnames/bind';

import styles from './CalculatorApp.module.scss';
import { ACTION } from './action';

const cx = classNames.bind(styles);

function ButtonDigit({ dispatch, digit }) {
    return (
        <button
            className={cx('btn-action')}
            onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    );
}

export default ButtonDigit;
