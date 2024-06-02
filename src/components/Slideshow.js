import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Slideshow.module.css';

function Slideshow() {
    const images = [
        'https://api.technodom.kz/f3/api/v1/images/smart_chasy_apple_watch_se_2023_44mm_starlight_aluminium_case_with_starlight_sport_loop_mre63_274467_1.jpg',
        'https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-large'
    ];

    return (
        <div className={styles.slideshowContainer}>
            <Slide duration={5000} transitionDuration={1000} indicators={true}>
                {images.map((image, index) => (
                    <div className={styles.eachSlide} key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Slideshow;


