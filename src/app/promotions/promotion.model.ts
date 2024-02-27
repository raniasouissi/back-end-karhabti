// promotion.model.ts

export interface Promotion {
    _id?: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    carId: string; // Référence à l'ID de la voiture concernée par la promotion
  }
  