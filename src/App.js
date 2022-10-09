import './App.css';
import {useState} from "react";

function App() {

  const [todo,setTodo] = useState([{
    id:1,
    name:'Javascript',
    isDone:false
  }])
  const [title,setTitle] = useState('')

  const handleChange = (e) => {

    setTitle(e.target.value)

  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-4xl my-5'>TODO APP</h1>
        <div className='flex-row flex-wrap'>
          <div className="basis-1/3">

              <div className="flex justify-center">
              <input type="search" id="default-search"
                     onChange={handleChange}
                     className="p-2 mx-2 w-1/5 text-xm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="type todo name" required/>
                <button type="button"

                        className=" p-2focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3   mb- dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red
                </button>

              </div>
          <div className='flex justify-center '>
            <ul
              className="w-1/4  mt-4 text-xm font-medium text-white bg-gray-700 rounded-lg  border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {
                todo.map(el => (
                  <li className="py-2 px-4 w-full rounded-t-lg border-b  dark:border-gray-600">{el.name}</li>
                ))
              }
            </ul>
          </div>

          </div>

        </div>
        <div className='flex-row flex-wrap justify-center py-20'>
          <hr/>
          <h1 className='text-2xl text-blue-600'>Законченные дела!</h1>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
