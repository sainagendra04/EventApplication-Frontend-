import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsihListComponent } from './wsih-list.component';

describe('WsihListComponent', () => {
  let component: WsihListComponent;
  let fixture: ComponentFixture<WsihListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsihListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsihListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
