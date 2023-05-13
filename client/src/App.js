import './App.css';
//components
import { InputTodo } from './component/InputTodo';
import { ListTodo } from './component/ListTodo';

function App() {
  return (
    <>
      <div className="container">
        <InputTodo/>
        <ListTodo/>
      </div>
    </>
  );
}

export default App;
