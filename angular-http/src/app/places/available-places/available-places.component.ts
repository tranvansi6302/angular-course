import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { catchError, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  error = signal<string | undefined>(undefined);

  private placesService = inject(PlacesService);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subcription = this.placesService.loadAvailablePlaces().subscribe({
      next: (res) => {
        this.places.set(res.places);
      },
      error: (err: Error) => {
        this.error.set(err.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    // Nên thiết lập const subcription = this.placesService.loadAvailablePlaces().subscribe... ở đây để sau này có thể unsubscribe, cũng đơn giản hơn việc cập nhật dữ liệu, trạng thái của component vì vậy việc đăng ký trong comp là khá phô biến
    this.destroyRef.onDestroy(() => {
      subcription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subcription = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error(err);
        },
      });
    this.destroyRef.onDestroy(() => {
      subcription.unsubscribe();
    });
  }
}
