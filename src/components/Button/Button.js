import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ onClick, type }) {
    return (
        <button
            onClick={onClick}
            className={cx(type)}
        >
            {type}
        </button>
    );
}

export default Button;
