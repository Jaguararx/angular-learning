import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iplayer } from './player';
import { playerService } from './player.service';

@Component({
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class playerListComponent implements OnInit, OnDestroy {
  pageTitle = 'Player List';
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredplayers = this.performFilter(value);
  }

  filteredplayers: Iplayer[] = [];
  players: Iplayer[] = [];

  constructor(private playerService: playerService) {}

  performFilter(filterBy: string): Iplayer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.players.filter((player: Iplayer) =>
      player.playerName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.playerService.getplayers().subscribe({
      next: players => {
        this.players = players;
        this.filteredplayers = this.players;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'player List: ' + message;
  }
}
