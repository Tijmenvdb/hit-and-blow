import { TestBed } from '@angular/core/testing';
import { GameSectionComponent } from './game-section.component';

describe('GameSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameSectionComponent
      ],
    }).compileComponents();
  });

  it('should create the recipe card component', () => {
    const fixture = TestBed.createComponent(GameSectionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
