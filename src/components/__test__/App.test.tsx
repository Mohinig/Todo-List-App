import { shallow } from 'enzyme';
import Todo from '../Todo';
import Form from '../Form';
describe('todo', () => {
  it('displays text based on props.text', () => {
    const toDo = shallow(
      <Todo
        text="Test ToDo"
        todo={() => null}
        todos={() => null}
        setTodos={() => null}
      />,
    );
    //console.log('!!!!!!!!!! ', toDo.find('li').childAt(0).text());
    //console.log(toDo.find('todo-item').text);
    expect(toDo.find('li').childAt(0).text() === ('Test ToDo'));

    toDo.setProps({ text: 'New ToDo' });

    expect(toDo.find('li').childAt(0).text() === ('New ToDo'));
  })
});
describe('form', () => {
  it('check filter todo change', () => {
    const buttonspy = jest.fn();
    const form = shallow(
      <Form
        setStatus={undefined}
        setInputText={undefined}
        inputText={''}
        todos={[]}
        setTodos={undefined}
      />,
    );

    console.log(form.find('filter-todo').simulate);
    expect(buttonspy).toHaveBeenCalled();
  })
});


