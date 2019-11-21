import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemedioPage } from './remedio.page';

describe('RemedioPage', () => {
  let component: RemedioPage;
  let fixture: ComponentFixture<RemedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
