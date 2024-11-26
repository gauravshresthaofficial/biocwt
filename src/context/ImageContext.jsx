import React, { createContext, useState, useEffect } from 'react';

// Import images explicitly
import work1 from '../assets/work1.svg';
import work2 from '../assets/work2.svg';
import work3 from '../assets/work3.svg';
import background from '../assets/Group9.svg';
import workimage from '../assets/workimage.svg'
import imagemiddle from '../assets/imagemiddle.svg'
import logo from "../assets/logo.svg"
import hero1 from '../assets/image-1.svg'
import hero2 from '../assets/image-2.svg'
import hero3 from '../assets/image.svg'
// import workimage from '../assets/workimage.svg'
import arrow from '../assets/icons/arrow.svg'
import wood1 from '../assets/wood1.svg'
import wood2 from '../assets/wood2.svg'
import wood3 from '../assets/wood3.svg'

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Manually preload all imported images
        const imageSources = { work1, work2, work3, background, workimage, imagemiddle, logo, hero1, hero2, hero3, arrow, wood1, wood2, wood3 };

        const preloadImages = async () => {
            try {
                await Promise.all(
                    Object.entries(imageSources).map(([key, src]) =>
                        new Promise((resolve, reject) => {
                            const img = new Image();
                            img.src = src;
                            img.onload = () => resolve({ key, src });
                            img.onerror = reject;
                        })
                    )
                ).then((loadedImages) => {
                    const imageMap = loadedImages.reduce((acc, { key, src }) => {
                        acc[key] = src;
                        return acc;
                    }, {});
                    setImages(imageMap);
                    setIsLoading(false);
                });
            } catch (error) {
                console.error('Error preloading images:', error);
                setIsLoading(false);
            }
        };

        preloadImages();
    }, []);

    return (
        <ImageContext.Provider value={{ images, isLoading }}>
            {children}
        </ImageContext.Provider>
    );
};
