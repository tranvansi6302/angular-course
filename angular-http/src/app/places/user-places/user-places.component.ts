import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  isFetching = signal<boolean>(false);
  error = signal<string | undefined>(undefined);
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;
  ngOnInit(): void {
    this.isFetching.set(true);
    const subcription = this.placesService.loadUserPlaces().subscribe({
      error: (err: Error) => {
        this.error.set(err.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subcription.unsubscribe();
    });
  }

  onRemovePlace(place: Place) {
    const subcription = this.placesService.removeUserPlace(place).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    this.destroyRef.onDestroy(() => {
      subcription.unsubscribe();
    });
  }
}
