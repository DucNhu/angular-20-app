import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListPokemonService {
  apiService = inject(ApiService);
  constructor() {}
  /**
   * Lấy danh sách pokemon với phân trang
   * @param limit Số lượng mỗi trang
   * @param offset Vị trí bắt đầu
   */
  getPokemon(limit = 10, offset = 0): Observable<any[]> {
    return this.apiService
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        // Lấy results array từ response
        map((val: any) => val.results || []),
        // Fetch chi tiết từng pokemon từ URL
        mergeMap((results: any[]) => {
          if (results.length === 0) {
            return of([]);
          }
          const detailRequests = results.map((pokemon: any) =>
            this.apiService.get(pokemon.url)
          );
          return forkJoin(detailRequests);
        })
      );
  }
}
