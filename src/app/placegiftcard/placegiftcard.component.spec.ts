import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacegiftcardComponent } from './placegiftcard.component';

describe('PlacegiftcardComponent', () => {
  let component: PlacegiftcardComponent;
  let fixture: ComponentFixture<PlacegiftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacegiftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacegiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
