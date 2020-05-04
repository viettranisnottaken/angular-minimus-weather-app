import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { HttpClientModule } from '@angular/common/http';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('public interface', () => {
    describe('#triggerLinkState', () => {
      beforeEach(() => {
        component.isActiveClassActive = false;
        component.triggerLinkState();
      });

      it('should change isActiveClassActive from false to true', () => {
        expect(component.isActiveClassActive).toBeTrue();
      });

      it("should change activeClass from '' to 'active'", () => {
        expect(component.activeClass).toBe('active');
      });
    });
  });
});
