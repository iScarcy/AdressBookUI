import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressbookComponent } from './adressbook.component';

describe('AdressbookComponent', () => {
  let component: AdressbookComponent;
  let fixture: ComponentFixture<AdressbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressbookComponent]
    });
    fixture = TestBed.createComponent(AdressbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
