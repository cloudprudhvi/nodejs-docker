import { ComponentFixture, TestBed } from '@angular/core/testing';
import { K8sComponent } from './k8s.component';

describe('K8sComponent', () => {
  let component: K8sComponent;
  let fixture: ComponentFixture<K8sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K8sComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K8sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
