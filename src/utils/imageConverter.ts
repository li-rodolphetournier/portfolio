/**
 * Convertit une image en niveaux de gris (noir et blanc) en utilisant l'API Canvas
 * @param imageSrc - URL de l'image source
 * @returns Promise<string> - Data URL de l'image convertie en noir et blanc
 */
export const convertToGrayscale = (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Créer un élément Image pour charger l'image source
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Nécessaire pour éviter les erreurs CORS si l'image vient d'un autre domaine

    img.onload = () => {
      try {
        // Créer un canvas temporaire
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Impossible de créer le contexte canvas'));
          return;
        }

        // Définir les dimensions du canvas à celles de l'image
        canvas.width = img.width;
        canvas.height = img.height;

        // Dessiner l'image sur le canvas
        ctx.drawImage(img, 0, 0);

        // Récupérer les données des pixels
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Convertir chaque pixel en niveaux de gris
        // Formule standard pour la luminance : 0.299*R + 0.587*G + 0.114*B
        for (let i = 0; i < data.length; i += 4) {
          const red = data[i];
          const green = data[i + 1];
          const blue = data[i + 2];
          // alpha reste à data[i + 3]

          // Calculer la valeur de gris
          const gray = 0.299 * red + 0.587 * green + 0.114 * blue;

          // Appliquer la valeur de gris à chaque canal RGB
          data[i] = gray;     // R
          data[i + 1] = gray; // G
          data[i + 2] = gray; // B
          // data[i + 3] reste inchangé (alpha)
        }

        // Mettre à jour les données du canvas avec les pixels modifiés
        ctx.putImageData(imageData, 0, 0);

        // Convertir le canvas en data URL (format base64)
        const grayscaleDataUrl = canvas.toDataURL('image/jpeg', 1.0);
        resolve(grayscaleDataUrl);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error('Erreur lors du chargement de l\'image'));
    };

    // Charger l'image
    img.src = imageSrc;
  });
};

