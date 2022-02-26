import { useRecoilState } from "recoil";
import { todosState } from "../../atoms/atom";

const StatusSelect = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const handleSetNewStatus = (id, staus) => {
    const foundTodo = todos.findIndex((todo) => todo.id === id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };

    setTodos(() => {
      if (todos[foundTodo].status) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          status: staus,
        });
      }
    });
  };
  return (
    <>
      <select
        value={todo.status}
        onChange={(e) => handleSetNewStatus(todo.id, e.target.value)}
        style={{ outline: "none", textAlign: "center" }}
      >
        <option value="着手前">着手前</option>
        <option value="進行中">進行中</option>
        <option value="完了">完了</option>
      </select>
    </>
  );
};

export default StatusSelect;
