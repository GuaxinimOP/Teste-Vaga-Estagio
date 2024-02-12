import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSdComponent } from './login-sd.component';

describe('LoginSdComponent', () => {
  let component: LoginSdComponent;
  let fixture: ComponentFixture<LoginSdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
