import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-pokemon-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './pokemon-detail-dialog.html',
  styleUrl: './pokemon-detail-dialog.css',
})
export class PokemonDetailDialog {
  @Input() pokemon: any = null;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onVisibleChange(value: boolean) {
    this.visible = value;
    this.visibleChange.emit(value);
  }

  get pokemonStats() {
    if (!this.pokemon?.stats) return [];
    return this.pokemon.stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
  }

  get pokemonTypes() {
    if (!this.pokemon?.types) return [];
    return this.pokemon.types.map((type: any) => type.type.name);
  }

  get pokemonAbilities() {
    if (!this.pokemon?.abilities) return [];
    return this.pokemon.abilities.map((ability: any) => ability.ability.name);
  }
}
