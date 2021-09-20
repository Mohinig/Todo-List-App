import { shallow } from 'enzyme';
import Todo from './components/Todo';
    
    describe('todo' ,() => {
      it('displays text based on props.text',()=>{
        const toDo=shallow(
          <Todo
            text="Test ToDo"
            todo={()=>null}
            todos={()=>null}
            setTodos={()=>null}
          />,
      );
      console.log('!!!!!!!!!! ', toDo.find('li').childAt(0).text());
      //console.log(toDo.find('todo-item').text);
      expect(toDo.find('li').childAt(0).text()===('Test ToDo'));
      
      toDo.setProps({text:'New ToDo'});
      
      expect(toDo.find('li').childAt(0).text()===('New ToDo'));
      }) 
   });


        