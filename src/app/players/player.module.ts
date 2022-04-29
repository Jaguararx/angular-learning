import { NgModule } from '@angular/core';
import { playerListComponent } from './player-list.component';
import { playerDetailComponent } from './player-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { playerDetailGuard } from './player-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    playerListComponent,
    playerDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'players', component: playerListComponent },
      {
        path: 'players/:id',
        canActivate: [playerDetailGuard],
        component: playerDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class playerModule { }
