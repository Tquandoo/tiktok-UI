import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchServices';
import { wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem/';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchReult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchReult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            setSearchReult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchReult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //
        <div>
            <HeadlessTippy
                interactive={true} // cho phép select vào kqua
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attr) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attr}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}

                    <button className={cx('search-btn')} tabIndex={-1} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
