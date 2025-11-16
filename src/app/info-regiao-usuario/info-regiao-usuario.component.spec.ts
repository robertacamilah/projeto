import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { infoRegiaoUsuarioComponent } from './info-regiao-usuario.component';

describe('infoRegiaoUsuarioComponent', () => {
  let component: infoRegiaoUsuarioComponent;
  let fixture: ComponentFixture<infoRegiaoUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ infoRegiaoUsuarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(infoRegiaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
