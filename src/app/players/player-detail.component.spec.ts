import { ComponentFixture, TestBed } from '@angular/core/testing';

import { playerDetailComponent } from './player-detail.component';

describe('playerDetailComponent', () => {
  let component: playerDetailComponent;
  let fixture: ComponentFixture<playerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ playerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(playerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
