import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <nav className={cx('inner')}>
                <ul className={cx('todo-list')}>
                    <li className={cx('todo-item')}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={cx('todo-item')}>
                        <Link to="/todosapp">Todos App</Link>
                    </li>
                    <li className={cx('todo-item')}>
                        <Link to="/calculator">Calculator</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
