import React from 'react';
import PropTypes from 'prop-types';
import pEvent from 'p-event';

class CroppedImage extends React.Component {
    async componentDidMount() {
        const { img } = this;
        const { crop } = this.props;
        if (!img) {
            return;
        }
        if (!img.complete) {
            await pEvent(img, 'load', {
                timeout : 8000
            });
        }
        const cropX = Math.min(crop.x, img.naturalWidth);
        const cropY = Math.min(crop.y, img.naturalHeight);
        const cropWidth = Math.min(crop.width, img.naturalWidth - cropX);
        const cropHeight = Math.min(crop.height, img.naturalHeight - cropY);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = cropWidth;
        canvas.height = cropHeight;
        // TODO: React-ify this
        document.body.appendChild(canvas);
        context.drawImage(
            img,
            cropX, cropY,
            cropWidth, cropHeight,
            0, 0,
            cropWidth, cropHeight
        );
        canvas.toBlob(async (blob) => {
            const croppedUrl = URL.createObjectURL(blob);
            const loadedCropped = pEvent(img, 'load', {
                timeout : 8000
            });
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center';
            img.style.width = `auto`;
            img.style.height = 'auto';
            img.src = croppedUrl;
            await loadedCropped;
            URL.revokeObjectURL(blob);
        }, 'image/png');
    }
    render() {
        const { src, alt } = this.props;

        return (
            <img
                ref={(img) => {
                    console.log('img:', img);
                    this.img = img;
                }}
                src={src}
                alt={alt}
            />
        );
    }
}
CroppedImage.propTypes = {
    alt : PropTypes.string.isRequired,
    src : PropTypes.string.isRequired
};

module.exports = {
    CroppedImage
};
