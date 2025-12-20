import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  catchError,
  concat,
  concatAll,
  concatWith,
  map,
  mergeAll,
  mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

// UI
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list-pokemon',
  imports: [CommonModule, TableModule],
  templateUrl: './list-pokemon.html',
  styleUrl: './list-pokemon.css',
})
export class ListPokemon implements OnInit {
  // Services
  apiService = inject(ApiService);

  // signal
  listPokemon: any = signal([]);
  getPokemon = computed(() => this.listPokemon());
  // complete

  ngOnInit(): void {
    this.apiService
      .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .pipe(
        map((v: any) => v.results.map((pokemon: any) => pokemon.url)),
        mergeMap((v2: any) => {
          console.log('v2', v2);
          const listMap = v2.map((url: string) => {
            return this.apiService.get(url);
          });
          return forkJoin(listMap)
        }),
        map((v:any) => v),
        catchError((v) => {
          console.error(24, v);
          return of(v);
        })
      )
      .subscribe((value) => {
        console.log(value);
        this.listPokemon.set(value)
      });
  }
}
