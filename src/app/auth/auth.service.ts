import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { RegisterDto } from '../register/Dto/register.dto';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API
  private readonly TOKEN_KEY = 'auth_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  

  constructor(private http: HttpClient) {}
  

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  

  clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/auth/login', credentials)
      .pipe(
        tap(response => {
          this.setToken(response.token);
          this.isAuthenticatedSubject.next(true); // Mettre à jour l'état d'authentification
        })
      );
  }
  
  signUpClient(registerData: RegisterDto): Observable<any> {
    const signUpClientUrl = 'http://localhost:3000/api/auth/signupclient'; 
    return this.http.post(signUpClientUrl, registerData);
  }

  signUpVendeur(signUpData: any): Observable<any> {
    // Envoyez une requête POST pour vous inscrire en tant que client
    return this.http.post<any>('http://localhost:3000/api/Vendeurs/createVendeur', signUpData);
  }

  signUpAdmin(signUpData: any): Observable<any> {
    // Envoyez une requête POST pour vous inscrire en tant que client
    return this.http.post<any>('http://localhost:3000/api/Admins/createAdmin', signUpData);
  }
  
  sendPasswordResetEmail(email: string): Observable<any> {
    // Envoyez une requête POST pour envoyer un email de réinitialisation de mot de passe
    return this.http.post<any>('http://localhost:3000/api/auth/send-password-reset-email', { email });
  }
  
  resetPassword(token: string, newPassword: string): Observable<any> {
    // Envoyez une requête POST pour réinitialiser le mot de passe
    return this.http.post<any>('http://localhost:3000/api/auth/reset-password', { token, newPassword });
  }
  
  // Ajoutez d'autres méthodes en fonction de vos besoins
  isAuthenticated(): boolean {
    const token = this.getToken();
    console.log("Token:", token); // Ajoutez cette ligne
    return !!token;
  }
  
  logout(): Observable<any> {
    const token = this.getToken();
  
    if (!token) {
      console.error("No token found. Cannot log out.");
      return throwError("Aucun token trouvé. Vous êtes déjà déconnecté.");
    }
  
    const decodedToken: any = jwt_decode(token);
    const userId = decodedToken.id;
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.post<any>(`${this.apiUrl}/auth/logout/${userId}`, {}, { headers })
      .pipe(
        tap(() => {
          this.clearToken();
          this.isAuthenticatedSubject.next(false);
        }),
        catchError(error => {
          console.error('Erreur lors de la déconnexion:', error);
          return throwError("La déconnexion a échoué.");
        })
      );
  }
  
  getTokenData(token: string): any {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Erreur lors du décodage du token:', error);
      return null;
    }
  }
  
  
 
}
  
