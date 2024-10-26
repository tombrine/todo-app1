import { useState } from "react";
// import { createElement } from "react";
const pages = () => {
  const [InputValue, setInputValue] = useState(0);
  const [newTodo, setNewTodo] = useState();
  const [TaskValue, setTaskValue] = useState("");
  const [lists, setLists] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputValue = (value) => {
    setInputValue(value);
    console.log(InputValue);
    setTaskValue(value);
  };
  const tap = () => {
    const ids = Math.floor(Math.random() * 100);
 
    if (InputValue == "") return;
    const newTask = {
      value: InputValue,
      id: ids,
      isDone: false,
    };
    setLists([...lists, newTask]);
    setInputValue("");
    setTaskValue("");
  };

  const remTask = (idies) => {
    console.log("id", idies);
    const newTasks = lists.filter((list) => {
      return list.id !== idies;
    });
    setLists(newTasks);
  };

  const change = (id, idies) => {
    const updatedTasks = lists.map((list) => {
      return list.id == id ? {...list, value: newTask} : list
    })
    setLists(updatedTasks)
  }

  const done = (id) => {
    const updatedTasks = lists.map((list) => {
      return list.id == id ? {...list, isDone: true} : list
    })
    setLists(updatedTasks)
  }


  return (
    <div className="content">
      <div className="container">
        <input
          type="text"
          className="input"
          value={TaskValue}
          placeholder="Your plan today is..."
          onChange={(event) => handleInputValue(event.target.value)}
        />
        <button className="button" onClick={tap}>
          Add
        </button>
      </div>
      <div>
        {lists.map((list, index) => {
          return (
            <div className="inputs">
              <div key={index} className="listing"> 
                
                <div style={{textDecoration: list.isDone == true ? 'line-through' : 'none'}}>{list.value}</div>

               <button onClick={() => done(list.id)} >done</button>

                <button onClick={() => remTask(list.id)}>remove</button>
 
                <button onClick={() => setNewTodo(list.id)}>edit</button>
                {
                  newTodo === list.id ? (
                    <div>
                      <input type="text" value={newTask} onChange={(e) => {setNewTask(e.target.value)}}/>
                      {console.log(newTask)}
                      <button onClick={() => change(list.id)}>edit todo</button> 
                    </div>
                  ) :null
                }
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default pages;
 
