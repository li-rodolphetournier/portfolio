import { useState, useEffect } from 'react';
import { convertToGrayscale } from '@/utils/imageConverter';

/**
 * Hook React personnalisé pour charger et convertir une image en noir et blanc
 * @param imageSrc - URL de l'image source
 * @returns L'URL de l'image convertie en noir et blanc, ou l'image originale en cas d'erreur
 */
export const useGrayscaleImage = (imageSrc: string): string => {
  const [grayscaleSrc, setGrayscaleSrc] = useState<string>(imageSrc);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    // Si l'image source change ou si on a déjà eu une erreur, ne pas réessayer
    if (hasError) {
      return;
    }

    // Convertir l'image en noir et blanc
    convertToGrayscale(imageSrc)
      .then((convertedImage) => {
        setGrayscaleSrc(convertedImage);
      })
      .catch((error) => {
        console.warn('Erreur lors de la conversion en noir et blanc:', error);
        // En cas d'erreur, utiliser l'image originale
        setGrayscaleSrc(imageSrc);
        setHasError(true);
      });
  }, [imageSrc, hasError]);

  return grayscaleSrc;
};

