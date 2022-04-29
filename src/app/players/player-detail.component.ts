import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iplayer } from './player';
import { playerService } from './player.service';

@Component({
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class playerDetailComponent implements OnInit {
  pageTitle = 'player Detail';
  errorMessage = '';
  player: Iplayer | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playerService: playerService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getplayer(id);
    }
  }

  getplayer(id: number): void {
    this.playerService.getplayer(id).subscribe({
      next: player => this.player = player,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/players']);
  }
}
