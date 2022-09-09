import React from "react";
import styled from "styled-components";
import { XIcon, CheckIcon } from "@heroicons/react/20/solid";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <TodoStyled>
      <div className="front">
        <CheckButton onClick={() => completeTodo(index)}>
          <CheckIcon width="16" height="16" />
        </CheckButton>
        <TodoText isCompleted={todo.isCompleted}>{todo.text}</TodoText>
      </div>
      <DeleteButton onClick={() => removeTodo(index)}>
        <XIcon width="16" height="16" />
      </DeleteButton>
    </TodoStyled>
  );
}

const TodoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--color-tinted-cream);
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: var(--box-shadow-sm);
  transition: all 0.3s ease-in-out;
  .front {
    display: flex;
    align-items: center;
    grid-gap: 0.75rem;
  }
  :hover {
    box-shadow: var(--box-shadow-lg);
    transform: scale(1.01);
  }
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  transition: all 0.3s ease-in-out;
  color: ${(props) =>
    props.isCompleted ? "var(--color-gray-300)" : "var(--color-gray-800)"};
`;

const CheckButton = styled.button`
  color: var(--color-sea-blue);
  border: 1px solid var(--color-sea-blue);
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 28px;
  height: 28px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: var(--color-sea-blue);
    color: white;
    transform: scale(0.95);
  }
`;

const DeleteButton = styled.button`
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-300);
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 28px;
  height: 28px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: var(--color-gray-100);
    color: var(--color-gray-800);
    transform: scale(0.95);
  }
`;

function TodoForm({ addTodo, resetTodos }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>Add a new todo</label>
      <div className="end">
        <input
          type="text"
          className="input"
          placeholder="Push a pixel"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <button onClick={() => resetTodos()}>Reset todos</button> */}
        <StyledSubmitButton type="submit" onClick={handleSubmit}>
          Add
        </StyledSubmitButton>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-top: 0.5rem;
  div.end {
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
  }
  label {
    font-size: var(--font-size-xs);
    color: var(--color-gray-600);
  }
  input {
    border: 1px solid var(--color-gray-300);
    width: 100%;
    color: var(--color-gray-800);
    padding: 0.75rem 1.25rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;
  }
  input::placeholder {
    color: var(--color-gray-300);
  }
`;

const StyledSubmitButton = styled.button`
  color: white;
  background: var(--color-sea-blue);
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
`;

function TodoApp() {
  const [todos, setTodos] = React.useState([
    {
      text: "Doomscroll on Twitter",
      isCompleted: false,
    },
    {
      text: "Directly manipulate my family",
      isCompleted: false,
    },
    {
      text: "Weigh in on whether designers should code",
      isCompleted: false,
    },
  ]);

  const initialTodos = [
    {
      text: "Push a pixel",
      isCompleted: false,
    },
    {
      text: "Doomscroll on Twitter",
      isCompleted: false,
    },
    {
      text: "Directly manipulate my family",
      isCompleted: false,
    },
  ];

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted
      ? (newTodos[index].isCompleted = false)
      : (newTodos[index].isCompleted = true);
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //   const resetTodos = () => {
  //     setTodos(initialTodos);
  //   };

  return (
    <StyledApp>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm
          addTodo={addTodo}
          // resetTodos={resetTodos}
        />
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-family: var(--font-sans);
  margin: 0rem 0 3rem;
  color: var(--color-gray-800);
`;

export default TodoApp;
