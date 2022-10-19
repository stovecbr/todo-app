import React, { useState } from 'react';  //useStateの読み込み
import './styles.css';
// import { v4 as uuidv4 } from 'uuid';

export const App=  () =>  {
  const [todoText, setTodoText] = useState("");
  
  const [incompleteTodos, setIncompleteTodos] = useState([1,2]);
  const [completeTodos, setCompleteTodos] = useState([3])
  
  const onChangeTodoText = (event) => setTodoText(event.target.value );

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 元のコード
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };

  // // onClickDeliteに追加  未完了と完了が同時に削除されてしまう
  // const onClickDelete = (index) => {
  //   const newTodos = [...incompleteTodos];
  //   const newTodosComp = [...completeTodos]; //追加
  //   newTodos.splice(index,1);
  //   newTodosComp.splice(index,1); //追加
  //   setIncompleteTodos(newTodos);
    // setCompleteTodos(newTodosComp); //追加
  // };

  

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);  
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }
// onClickDeleteComplete追加
  const onClickDeleteComplete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index,1);
    setCompleteTodos(newTodos);
  };

  return (
    <>
      <div className='input-area'>
        <input
         placeholder='TODOを入力'
         value={todoText}
         onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index) => {
            return(
              <div key={index}  className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}        
        </ul>
      </div>
      <div className='complete-area'>
      {/* onClickDeleteComplete追加 */}
        <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo,index) => {
              return(
                <div key={index}  className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
                <button onClick={() => onClickDeleteComplete(index)}>削除</button>   {/* 追加 */}
                </div>
              );
            })}       

        {/* onClickDeleteのみの場合 */}
        {/* <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo,index) => {
              return(
                <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
                <button onClick={() => onClickDelete(index)}>削除</button>  {/* 削除ボタン追加 */}
                {/* </div> */}
              {/* );
            })}        */} 

        {/* 元のコード    */}
        {/* <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo,index) => {
              return(
                <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
                </div>
              );
            })}             */}

          </ul>
      </div>
    </>
  );
};
