import PropTypes from 'prop-types';
import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles, classNames);

function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired, // render tat ca cai render dc isRequired la yeu cau bat buoc
    classNames: PropTypes.string,

}
export default wrapper;
