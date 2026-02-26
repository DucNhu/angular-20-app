import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  catchError,
  concat,
  concatAll,
  concatWith,
  delay,
  map,
  mergeAll,
  mergeMap,
  scan,
  startWith,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { CommonModule } from '@angular/common';
import { forkJoin, merge, race } from 'rxjs';

// UI
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ListPokemonService } from './list-pokemon.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonDetailDialog } from './pokemon-detail-dialog';

@Component({
  selector: 'app-list-pokemon',
  imports: [CommonModule, TableModule, PaginatorModule, PokemonDetailDialog],
  templateUrl: './list-pokemon.html',
  styleUrl: './list-pokemon.css',
  standalone: true,
})
export class ListPokemon implements OnInit {
  // Services
  listPokemonService = inject(ListPokemonService);
  
  // signal
  // listPokemon: any = signal([]);
  listPokemon = toSignal(this.listPokemonService.getPokemon(), { initialValue: [] as any[]})
  getPokemon = computed(() => this.listPokemon() || []);
  
  // Pagination properties
  rowsPerPageOptions = [10, 20, 50, 100];
  first = 0;
  rows = 10;
  
  // Dialog properties
  selectedPokemon = signal<any>(null);
  dialogVisible = signal<boolean>(false);
  // complete

  ngOnInit(): void {
    // this.apiService
    //   .get('https://pokeapi.co/api/v2/pokemon?limit=100')
    //   .pipe(
    //     map((v: any) => v.results.map((pokemon: any) => pokemon.url)),
    //     mergeMap((urls: string[]) => {
    //       const top10Urls = urls.slice(0, 10);
    //       const remainingUrls = urls.slice(10, 1000);
    //       const top10Requests = top10Urls.map((url) =>
    //         this.apiService.get(url)
    //       );
    //       const remainingRequests = remainingUrls.map((url) =>
    //         this.apiService.get(url)
    //       );

    //       return forkJoin(top10Requests).pipe(
    //         mergeMap((v: any) => {
    //           return merge(...remainingRequests).pipe(
    //             scan((acc: any[], current: any) => [...acc, current], v),
    //             startWith(v)
    //           );
    //         })
    //       );
    //     }),
    //     catchError((v) => {
    //       console.error(24, v);
    //       return of(v);
    //     })
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //     this.listPokemon.set(value);
    //   });

    // this.listPokemonService.getPokemon().subscribe((value) => {
    //   console.log(value);
    //   this.listPokemon.set(value);
    // });
    console.log('this.listPokemon', this.listPokemon)
  }
  trackByFn(index: number, item: any) {
    return item.id; // hoặc index nếu không có id unique
  }
  
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  
  onRowClick(pokemon: any) {
    this.selectedPokemon.set(pokemon);
    this.dialogVisible.set(true);
  }
  
  onDialogClose() {
    this.dialogVisible.set(false);
    this.selectedPokemon.set(null);
  }
}
