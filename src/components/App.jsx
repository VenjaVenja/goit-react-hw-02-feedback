import React, {Component} from 'react';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
// import { ColorPicker } from './ColorPicker/ColorPicker';
import { TodoList } from './TodoList/TodoList';
// import { Form } from './Form/Form';
// import { TodoEditor } from './TodoEditor/TodoEditor';
import initialTodos from '../todos.json';

export class App extends Component {
  state = {
    todos: initialTodos,
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  // heandleInputChange = event => {
  //   // console.log(event.currentTarget.value)
  //   this.setState({
  //     inputValue: event.currentTarget.value,
  //   })
  // }

  // heandleNameChange = event => {
  //   this.setState({
  //     name: event.currentTarget.value,
  //   })
  // }

  /// Чтобы получить доступ к данным из Form
  // - прокидываем в форму пропс - onFormSubmitData
  // для получения даных в App после отправки Form

  onFormSubmitData = data => {
    console.log(data)
    // console.log(data.name)
    // console.log(data.tag)
  }

  render() {
    const { todos } = this.state;
    // const totalTodosCount = todos.length;
    // const totalCompetedTodosCount = todos.reduce((acc, todo) =>
    //   (todo.completed ? acc + 1 : acc), 0)
    
    // console.log(totalCompetedTodos)

    return (
    <>
    {/*
    <Counter initialValue={10}/>
    <Dropdown />
    <ColorPicker options={colorPicerOptions} /> 
    */}
        {/* <input
          type="text"
          value={inputValue}
          onChange={this.heandleInputChange}>
        </input> */}
        {/* <Form onSubmitForm={this.onFormSubmitData} /> */}

        
        {/* <p>Общее к-во:{totalTodosCount}</p>
        <p>К-во выполенных:{totalCompetedTodosCount}</p> */}

        {/* <TodoEditor/> */}

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
    </>
  );
    
  }
}
