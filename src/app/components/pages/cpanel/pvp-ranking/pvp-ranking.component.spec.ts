import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpRankingComponent } from './pvp-ranking.component';

describe('PvpRankingComponent', () => {
  let component: PvpRankingComponent;
  let fixture: ComponentFixture<PvpRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvpRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvpRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
