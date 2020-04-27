import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos items that are returned from service', () => {

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([[1, 2, 3]]);
    });

    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);

  });

  it('should call the server to add the chnages', () => {

    let spy = spyOn(service, 'add').and.callFake(() => {
      return Observable.empty();
    });

    component.add();
    expect(spy).toHaveBeenCalled();

  });

  it('should add the todo returned from  the server', () => {
    let todo = { id: 1 };

    let spy = spyOn(service, 'add').and.callFake(() => {
      return Observable.from([todo]);
    });

    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(1);

  });

  it('should set the message property if returns error', () => {
    let error = 'error from the server';

    let spy = spyOn(service, 'add').and.callFake(() => {
      return Observable.throw(error);
    });

    component.add();
    expect(component.message).toBe(error);

  });

  it('should call to delete the todo item if user confirms', () => {
    let error = 'error from the server';

    spyOn(window, 'confirm').and.returnValue(true);

    let spy = spyOn(service, 'delete').and.callFake(() => {
      return Observable.empty();
    });

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);

  });

  it('should not call to delete the todo item if user camcels', () => {
    let error = 'error from the server';

    spyOn(window, 'confirm').and.returnValue(false);

    let spy = spyOn(service, 'delete').and.callFake(() => {
      return Observable.empty();
    });

    component.delete(1);
    expect(spy).not.toHaveBeenCalled();

  });
});