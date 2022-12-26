import classNames from 'classnames/bind';

import styles from './CalculatorApp.module.scss';
import { ACTION } from './action';

const cx = classNames.bind(styles);

function ButtonOperation({ dispatch, operation }) {
    return (
        <button
            className={cx('btn-action')}
            onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </button>
    );
}

export default ButtonOperation;
