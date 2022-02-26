import { useRecoilState } from "recoil";
import { todosState } from "../../atoms/atom";

const PrioritySelect = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const handleSetNewPriority = (id, priority) => {
    const foundTodo = todos.findIndex((todo) => todo.id === id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };

    setTodos(() => {
      if (todos[foundTodo].priority) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          priority: priority,
        });
      }
    });
   
  };
  return (
    <select
      value={todo.priority}
      onChange={(e) => handleSetNewPriority(todo.id, e.target.value)}
      style={{ outline: "none" }}
    >
      <option value="高">高</option>
      <option value="中">中</option>
      <option value="低">低</option>
    </select>
  );
};

export default PrioritySelect;
