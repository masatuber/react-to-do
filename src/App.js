import React from 'react';
import { useState, useRef } from 'react';
import './App.css';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
//useStateでTodoListコンポーネントに値を渡す(空の配列)
const [todos, setTodos] = useState([]);
//インポート済のuseRef変数
const todoNameRef = useRef();
//タスクを追加するイベント変数
const handleAddTodo = () =>{
// inputの値（テキストのみ）取得する変数
const name = todoNameRef.current.value;
//空のタスクを除く処理
if(name === "") return;
//タスクの追加と更新する処理（スプレッド構文でオブジェクト更新idとnameとcompleted）
setTodos((prevTodos)=>{
  return [...prevTodos, {id: uuidv4(), name: name, completed: false }]; //uuidでユニークな値生成
  });
  todoNameRef.current.value = null;
};

const toggleTodo = (id) =>{
//todosの状態コピー変数
const newTodos = [...todos]; 
//toggleTodos変数の引数（id）が一致している場合にtodo変数に格納する（find関数）
const todo = newTodos.find((todo) => todo.id === id );
//todo変数が一致したならばcompletedで反転させる処理
  todo.completed = !todo.completed;
//setTodosを更新する処理
  setTodos(newTodos);
};
const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
  
};

  return (
    <>
    <div className="btn">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo} >タスクの追加</button>
      <button onClick={handleClear} >完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      {/*フィルター関数でfalseの時カウント*/}
      </div>
    </>
  );
};

export default App;
