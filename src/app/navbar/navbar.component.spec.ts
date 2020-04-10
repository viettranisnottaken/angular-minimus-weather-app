import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('Component class test', () => {});

  describe('Template test', () => {
    describe('Theme switch checkbox', () => {
      const themeSwitchCheckboxDE = fixture.debugElement;
      const themeSwitchCheckboxNE = themeSwitchCheckboxDE.nativeElement;

      const themeSwitchCheckbox = themeSwitchCheckboxNE.querySelector(
        '.theme-switch'
      );

      it('should be checked', () => {
        expect(themeSwitchCheckbox.classList.value).toContain('checked');
      });

      it('should be unchecked', () => {
        expect(themeSwitchCheckbox.classList.value).not.toContain('checked');
      });
    });
  });
});
