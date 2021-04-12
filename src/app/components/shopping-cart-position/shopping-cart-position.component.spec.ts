import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPositionComponent } from './shopping-cart-position.component';

describe('ShoppingCartPositionComponent', () => {
  let component: ShoppingCartPositionComponent;
  let fixture: ComponentFixture<ShoppingCartPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
