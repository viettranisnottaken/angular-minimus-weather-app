import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'minimus'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('minimus');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain(
  //     'Minimus'
  //   );
  // });

  describe('public interface', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    describe('#onSidebarTrigger', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });

      it('should alter sidebarIsHidden to true', () => {
        component.onSidebarTrigger(true);
        expect(component.sidebarIsHidden).toBeTrue();
      });

      it("should alter sidebarClasses to 'hidden d-flex' ", () => {
        component.onSidebarTrigger(true);
        expect(component.sidebarClasses).toBe('hidden d-flex');
      });

      it("should alter sidebarClasses to 'hidden d-none' after 0.4 sec", () => {
        jasmine.clock().install();

        component.onSidebarTrigger(true);
        jasmine.clock().tick(400);
        expect(component.sidebarClasses).toBe('hidden d-none');

        jasmine.clock().uninstall();
      });
    });

    describe('#onEscKeyUp', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });

      describe('whether or not it calls onSidebarTrigger', () => {
        beforeEach(() => {
          spyOn(component, 'onSidebarTrigger');
        });
        it('should not call onSidebarTrigger when sidebarIsHidden is true', () => {
          component.sidebarIsHidden = true;
          component.onEscKeyUp(true);

          expect(component.onSidebarTrigger).not.toHaveBeenCalled();
        });

        it('should call onSidebarTrigger when sidebarIsHidden is false', () => {
          component.sidebarIsHidden = false;
          component.onEscKeyUp(true);

          expect(component.onSidebarTrigger).toHaveBeenCalled();
        });
      });
    });
  });
});
