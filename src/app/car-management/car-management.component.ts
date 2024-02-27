import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../cars/car.model';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent implements OnInit {

  newCar: Car = {
    name: '',
    brand: '',
    year: 0,
    puissancefiscale: '',
    prix: 0,
    Kilometrage: '',
    description: '',
    Carburant: '',
 
  };
  showSuccessMessage: boolean = false;

  isEditing = false;
  isAdding = false;
  cars: Car[] = [];
  selectedCar: Car = {} as Car;
  noCars: boolean = false;



  constructor(private carService: CarService,) { 

  }
  ngOnInit(): void {
    this.fetchCars();
  }


  onSubmit() {
    this.carService.addCar(this.newCar).subscribe(
      addedCar => {
        console.log('Car added:', addedCar);
        // Réinitialisez le formulaire après l'ajout
        this.newCar = {
          name: '',
          brand: '',
          year: 0,
          puissancefiscale: '',
          prix: 0,
          Kilometrage: '',
          description: '',
          Carburant: '',
        
        };

        // Afficher le message de succès
        this.showSuccessMessage = true;

        // Réinitialiser le message de succès après quelques secondes
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000); // Attendre 3 secondes
      },
      error => {
        console.error('Error adding car:', error);
        // Gérez les erreurs d'ajout de voiture
      }
    );
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newCar.image = file; // Affectez directement l'objet File à la propriété image
    }
  }

  // Fetch cars
  fetchCars() {
    this.carService.fetchCars().subscribe(
      (data: Car[]) => {
        this.cars = data;
        // Mettez à jour l'URL de l'image pour chaque voiture en utilisant la baseImageUrl
        this.cars.forEach(car => {
          car.image = `${this.carService.baseImageUrl}/${car.image}`;
        });
      },
      (error) => {
        console.error('Error fetching cars:', error);
        // Gérer l'erreur
      }
    );
  }
  
  
  getImageUrl(image: File | string | undefined): string | undefined {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    } else if (typeof image === 'string') {
      return image; // Si c'est déjà un chemin d'image complet, retournez-le directement
    } else {
      return undefined; // Gérez le cas où l'image n'est pas définie ou n'est pas un type attendu
    }
  }

 




  // Edit car
  editCar(car: Car) {
    this.selectedCar = { ...car };
    this.isEditing = true;
  }

  // Update car
  updateCar() {
    if (this.selectedCar) {
      this.carService.updateCar(this.selectedCar).subscribe(
        (updatedCar) => {
          console.log('Car updated:', updatedCar);
          this.fetchCars(); // Refresh the car list
          this.selectedCar = {} as Car;
          this.isEditing = false;
        },
        (error) => {
          console.error('Error updating car:', error);
          // Handle error
        }
      );
    }
  }

  // Cancel editing
  cancelEditing() {
    this.selectedCar = {} as Car;
    this.isEditing = false;
  }

  // Delete car

  deleteCar(carId: string) {
    const authToken = localStorage.getItem('token'); // Retrieve the token from local storage

    if (authToken === null) {
      console.error('Token not found in local storage.');
      return;
    }

    if (confirm('Are you sure you want to delete this car?')) {
      this.carService.deleteCar(carId, authToken).subscribe(
        (deletedCar) => {
          // Remove the car from your cars array
          this.cars = this.cars.filter((car) => car._id !== deletedCar._id);
          // Handle success message if needed
        },
        (error) => {
          console.error('Error deleting car:', error);
          // Handle error if needed
        }
      );
    }
  }


  showAddForm() {
    this.isEditing = false;
    this.selectedCar = {} as Car;
    this.isAdding = true;
  }

  showCarList() {
    this.isEditing = false;
    this.selectedCar = {} as Car;
    this.isAdding = false;
    this.fetchCars();
  }

  // Fonction pour annuler l'ajout ou la modification
  cancelAction() {
    if (this.isAdding || this.isEditing) {
      this.isAdding = false;
      this.isEditing = false;
      this.selectedCar = {} as Car;
    }
  }
  cancelAdding() {
    this.isAdding = false; // Assurez-vous que cette variable existe dans votre composant
  }

 

}

