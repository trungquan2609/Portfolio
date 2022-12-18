import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ onClick, type, title }) {
    return (
        <button
            onClick={onClick}
            className={cx(type)}
        >
            {title}
        </button>
    );
}

export default Input;
