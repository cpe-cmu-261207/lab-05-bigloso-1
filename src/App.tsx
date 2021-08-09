import TodoList from './component/TodoList'
import Header from './component/Header'

function App() {

  return (
    <div>
      {/* header section */}
      <Header></Header>
      {/* todo section */}
       <div className='mx-auto max-w-4xl'> 
        {/* task input and add button */}
         <TodoList></TodoList>
      </div> 

      {/* footer section */}
      <p className='text-center text-gray-400'> 2021 Lab05 261207 by Nitipong Saengla </p>
    </div>
  );
}

export default App;