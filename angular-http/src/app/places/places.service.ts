import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);
  private errorService = inject(ErrorService);

  // Giải quyết khi thêm xong sẽ tự động load lại dữ liệu mà không cần F5
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong while fetching available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong while fetching user places. Please try again later.'
      // Giải quyết khi thêm xong sẽ tự động load lại dữ liệu mà không cần F5
    ).pipe(
      tap((resUserPlace) => {
        this.userPlaces.set(resUserPlace.places);
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if (prevPlaces.some((p) => p.id === place.id)) {
      this.errorService.showError('This place is already in your places.');
      return throwError(
        () => new Error('This place is already in your places.')
      );
    }

    // Giải quyết khi thêm xong sẽ tự động load lại dữ liệu mà không cần F5
    this.userPlaces.set([...prevPlaces, place]);
    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError((err) => {
          console.error(err);
          this.userPlaces.set(prevPlaces);
          this.errorService.showError(
            'Something went wrong while adding place to user places. Please try again later'
          );
          return throwError(
            () =>
              new Error(
                'Something went wrong while adding place to user places. Please try again later.'
              )
          );
        })
      );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();
    const newPlaces = prevPlaces.filter((p) => p.id !== place.id);
    this.userPlaces.set(newPlaces);
    return this.httpClient
      .delete(`http://localhost:3000/user-places/${place.id}`)
      .pipe(
        catchError((err) => {
          console.error(err);
          this.userPlaces.set(prevPlaces);
          this.errorService.showError(
            'Something went wrong while removing place from user places. Please try again later.'
          );
          return throwError(
            () =>
              new Error(
                'Something went wrong while removing place from user places. Please try again later.'
              )
          );
        })
      );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
