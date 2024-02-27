import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './cars/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public apiUrl = 'http://localhost:3000/api/cars';
  public baseImageUrl = 'http://localhost:3000/uploads';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des voitures
  fetchCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`);
  }

  // Méthode pour ajouter une voiture
  addCar(car: Car): Observable<Car> {
    const formData = new FormData();
    formData.append('name', car.name);
    formData.append('brand', car.brand);
    formData.append('year', car.year.toString());
    if (car.image instanceof File) {
      formData.append('image', car.image);
    }
    formData.append('puissancefiscale', car.puissancefiscale);
    formData.append('prix', car.prix.toString());
    formData.append('Kilometrage', car.Kilometrage);
    formData.append('description', car.description);
    formData.append('Carburant', car.Carburant);

    const authToken = localStorage.getItem('token'); // Obtenez le token depuis le localStorage
    const headers = { Authorization: `Bearer ${authToken}` }; // Ajoutez le token dans les headers

    return this.http.post<Car>(this.apiUrl, formData, { headers });
  }
  // Méthode pour mettre à jour une voiture
  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/cars/${car._id}`, car);
  }

  // Méthode pour supprimer une voiture
  deleteCar(carId: string, authToken: string): Observable<Car> {
    const headers = { Authorization: `Bearer ${authToken}` };
    return this.http.delete<Car>(`${this.apiUrl}/${carId}`, { headers });
  }
}
