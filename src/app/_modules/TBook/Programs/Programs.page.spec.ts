import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { ProgramsPage } from './Programs.page';

describe('Programsage', () => {
  let component: ProgramsPage;
  let fixture: ComponentFixture<ProgramsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
