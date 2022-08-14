import Typography from './Typography';
import Box from './Box';
import mergeClasses from '../utils/mergeClasses';
import { useEffect, useState } from 'react';
import Label from './Label';
import TextBox from './TextBox';
import Flex from './Flex';

export default function Todos({ data }) {
  const [todos, setTodos] = useState(data);
  const [inputTodo, setInputTodo] = useState('');

  useEffect(() => {
    console.log(inputTodo);
  }, [inputTodo]);

  return (
    <>
      <Label>Add todo (?):</Label>
      <Flex>
        <Box className="flex-1">
          <TextBox
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            fullWidth
            placeholder="add todo to todo list..."
          />
        </Box>
        <button
          className="bg-primary-color px-2"
          onClick={(e) => {
            addNewTodo(
              { name: inputTodo, completed: false, id: Date.now() },
              setTodos
            );
            setInputTodo('');
          }}
        >
          add
        </button>
      </Flex>
      <Box>
        <Typography className="my-3" variant="subtitle2">Todo list</Typography>
      </Box>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className={mergeClasses([
              `${item.completed ? 'line-through' : ''}`,
              'flex items-center my-2 justify-between',
            ])}
          >
            <Typography variant="body1">{item.name}</Typography>
            <Box>
              <button
                className={`bg-primary-color rounded-sm mx-1 p-1 ${
                  item.completed ? 'hidden' : ''
                }`}
                onClick={(e) =>
                  handleCompletedClick(e, item.id, todos, setTodos)
                }
              >
                completed
              </button>
              <button
                className="bg-danger-color rounded-sm mx-1 p-1"
                onClick={(e) => handleDeleteClick(e, item.id, todos, setTodos)}
              >
                delete
              </button>
            </Box>
          </li>
        ))}
      </ul>
    </>
  );
}

function handleCompletedClick(e, id, state, setState) {
  const updatedState = state.map((item) => {
    if (item.id === id && !item.completed) {
      return {
        ...item,
        completed: true,
      };
    }
    return item;
  });
  setState(updatedState);
  console.log({ state });
}

function handleDeleteClick(e, id, state, setState) {
  const updatedState = state.filter((item) => {
    if (item.id === id) {
      return false;
    }
    return true;
  });

  setState(updatedState);
}

function addNewTodo(newTodo, setState) {
  setState((prev) => [...prev, newTodo]);
}
