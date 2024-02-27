// promotion.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from './promotions/promotion.model';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = 'API_URL_HERE'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des promotions
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.apiUrl}/promotions`);
  }

  // Méthode pour ajouter une promotion
  addPromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(`${this.apiUrl}/promotions`, promotion);
  }

  // Méthode pour mettre à jour une promotion
  updatePromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.apiUrl}/promotions/${promotion._id}`, promotion);
  }

  // Méthode pour supprimer une promotion
  deletePromotion(promotionId: string): Observable<Promotion> {
    return this.http.delete<Promotion>(`${this.apiUrl}/promotions/${promotionId}`);
  }
}
