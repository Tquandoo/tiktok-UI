import config from '~/config';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import { UserGroupIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label="suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default SideBar;
