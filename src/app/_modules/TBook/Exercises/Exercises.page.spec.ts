import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExercisesPage } from './Exercises.page';

describe('ExercisesPage', () => {
  let component: ExercisesPage;
  let fixture: ComponentFixture<ExercisesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercisesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
