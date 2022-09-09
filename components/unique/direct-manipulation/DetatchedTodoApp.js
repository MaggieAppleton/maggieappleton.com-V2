import React from "react";
import styled from "styled-components";
import { XIcon, CheckIcon, RefreshIcon } from "@heroicons/react/20/solid";
import { useInView } from "react-intersection-observer";

function DetatchedTodo({ todo, index, completeTodo, removeTodo }) {
  return (
    <TodoStyled>
      <div className="front">
        <TodoText isCompleted={todo.isCompleted}>{todo.text}</TodoText>
      </div>
    </TodoStyled>
  );
}

const TodoStyled = styled.div`
  z-index: 1;
  position: relative;
  overflow: visible;
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

function DetatchedTodoApp() {
  const [todos, setTodos] = React.useState([
    {
      text: "Push a pixel",
      isCompleted: false,
    },
    {
      text: "Doomscroll on Twitter",
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
  ];

  const completeTodo = (index) => {
    const newTodos = [...todos];
    // check if there are any items in the array
    if (newTodos.length > 0) {
      // check if the index is within the array
      if (index < newTodos.length) {
        // toggle the isCompleted property
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        // set the new todos array
        setTodos(newTodos);
      }
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const resetTodos = () => {
    setTodos(initialTodos);
  };

  const { ref, inView, entry } = useInView({
    rootMargin: "-100px 0px -200px",
    threshold: 0.5,
  });

  return (
    <StyledApp ref={ref}>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <DetatchedTodo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      {inView && (
        <>
          <DeleteButton onClick={() => removeTodo(0)}>
            <XIcon width="20" height="20" /> Delete
          </DeleteButton>
          <CheckButton onClick={() => completeTodo(0)}>
            <CheckIcon width="20" height="20" /> Complete
          </CheckButton>
          <ResetButton onClick={() => resetTodos()}>
            <RefreshIcon width="20" height="20" /> Reset
          </ResetButton>
        </>
      )}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-family: var(--font-sans);
  margin: 0rem 0 3rem;
  color: var(--color-gray-800);
`;

const CheckButton = styled.button`
  z-index: 2;
  position: fixed;
  bottom: 6rem;
  left: 4rem;
  color: var(--color-sea-blue);
  border: 1px solid var(--color-sea-blue);
  background: white;
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  font-size: var(--font-size-sm);
  @media (max-width: 768px) {
    bottom: 2rem;
    left: 2rem;
  }
  :hover {
    background-color: var(--color-sea-blue);
    color: white;
    transform: scale(0.98);
  }
`;

const DeleteButton = styled.button`
  z-index: 2;
  position: fixed;
  top: 4rem;
  right: 4rem;
  background: white;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-300);
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    top: 2rem;
    right: 2rem;
  }
  :hover {
    background-color: var(--color-gray-100);
    color: var(--color-gray-800);
    transform: scale(0.98);
  }
`;

const ResetButton = styled.button`
  z-index: 2;
  position: fixed;
  top: 7rem;
  right: 4rem;
  background: white;
  color: var(--color-gray-400);
  border: 1px solid var(--color-gray-300);
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    top: 5rem;
    right: 2rem;
  }
  :hover {
    background-color: var(--color-gray-100);
    color: var(--color-gray-600);
    transform: scale(0.98);
  }
`;

export default DetatchedTodoApp;
