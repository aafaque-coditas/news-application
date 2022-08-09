import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogueboxComponent } from './login-dialoguebox.component';

describe('LoginDialogueboxComponent', () => {
  let component: LoginDialogueboxComponent;
  let fixture: ComponentFixture<LoginDialogueboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDialogueboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDialogueboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
