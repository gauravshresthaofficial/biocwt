import React, { createContext, useState, useEffect } from 'react';

// Import all images explicitly
import work1 from '../assets/work1.webp';
import work2 from '../assets/work2.webp';
import work3 from '../assets/work3.webp';
import background from '../assets/Group9.svg';
import workimage from '../assets/workimage.webp';
import imagemiddle from '../assets/imagemiddle.svg';
import logo from "../assets/logo.webp";
import hero1 from '../assets/image-1.webp';
import hero2 from '../assets/image-2.webp';
import hero3 from '../assets/image.webp';
import arrow from '../assets/icons/arrow.svg';
import wood1 from '../assets/wood1.webp';
import wood2 from '../assets/wood2.webp';
import wood3 from '../assets/wood3.webp';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // Categorize images
    const imageSources = {
        home: { hero1, hero2, hero3, background, logo },
        other: { work1, work2, work3, workimage, imagemiddle, arrow, wood1, wood2, wood3 },
    };

    useEffect(() => {
        const preloadImages = async (source) => {
            return Promise.all(
                Object.entries(source).map(([key, src]) =>
                    new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve({ key, src });
                        img.onerror = reject;
                    })
                )
            );
        };

        // Phase 1: Load Home Images
        const loadHomeImages = async () => {
            const homeImages = await preloadImages(imageSources.home);
            const homeImageMap = homeImages.reduce((acc, { key, src }) => {
                acc[key] = src;
                return acc;
            }, {});
            setImages((prevImages) => ({ ...prevImages, ...homeImageMap }));
            setIsLoading(false); // Set loading to false after home images are ready
        };

        // Phase 2: Load Other Images in the Background
        const loadOtherImages = async () => {
            const otherImages = await preloadImages(imageSources.other);
            const otherImageMap = otherImages.reduce((acc, { key, src }) => {
                acc[key] = src;
                return acc;
            }, {});
            setImages((prevImages) => ({ ...prevImages, ...otherImageMap }));
        };

        loadHomeImages().then(loadOtherImages); // Chain loading phases
    }, []);

    return (
        <ImageContext.Provider value={{ images, isLoading }}>
            {children}
        </ImageContext.Provider>
    );
};
