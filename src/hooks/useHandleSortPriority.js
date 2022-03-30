import { useRecoilState } from "recoil"
import { todosState } from "../../pages/atoms/atom"

const useHandleSortPriority = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleSortPriority=(todos, priorityArrow, setPriorityArrow) =>{
    const high = todos.filter((todo) => todo.priority === "高");
    const middle = todos.filter((todo) => todo.priority === "中");
    const low = todos.filter((todo) => todo.priority === "低");
    if(priorityArrow==="▲"){
      setTodos([...low, ...middle, ...high]);
      setPriorityArrow("▼");
    }else{
      setTodos([...high, ...middle, ...low])
      setPriorityArrow("▲");
    }
  }
  return handleSortPriority;
}

export default useHandleSortPriority; 