export interface Car {
    _id?: string;
    name: string;
    brand: string;
    year: number;
    image?: string | File; // Peut être une chaîne de caractères (URL) ou un objet File (à l'ajout)
    puissancefiscale: string;
    prix: number;
    Kilometrage: string;
    description: string;
    Carburant: string;
    couleur?: string;
    estVendue?: boolean;
    promotions?: string[];
  }
  