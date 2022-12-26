import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('app')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;