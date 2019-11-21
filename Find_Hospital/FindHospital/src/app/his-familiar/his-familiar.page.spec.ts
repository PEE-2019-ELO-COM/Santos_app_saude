import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HisFamiliarPage } from './his-familiar.page';

describe('HisFamiliarPage', () => {
  let component: HisFamiliarPage;
  let fixture: ComponentFixture<HisFamiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisFamiliarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HisFamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
