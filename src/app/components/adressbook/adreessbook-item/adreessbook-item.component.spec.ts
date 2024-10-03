import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdreessbookItemComponent } from './adreessbook-item.component';

describe('AdreessbookItemComponent', () => {
  let component: AdreessbookItemComponent;
  let fixture: ComponentFixture<AdreessbookItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdreessbookItemComponent]
    });
    fixture = TestBed.createComponent(AdreessbookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
