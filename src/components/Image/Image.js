import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
console.log(images.noImage);
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };
    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};
export default Image;

// Khi muốn mounted 1 comp vào cha, thì nó sẽ phải dùng forwardRef để thằng tippy hiểu được phần tử comp có ref là gì(Thuộc tính của thẻ)
