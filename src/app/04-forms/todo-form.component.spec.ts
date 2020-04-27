import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component  = new TodoFormComponent(new FormBuilder());

  });

  it('should create form with two controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('name')).toBeTruthy();
  });

  it('shuld make the name control required', () => {
    let control = component.form.get('name');
    expect(control.setValue('')).toBeFalsy();
  });
});