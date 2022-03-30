import { useRecoilState } from "recoil"
import { todosState } from "../../pages/atoms/atom"

const useHandleSortStatus = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleSortStatus = (todos, statusArrow, setStatusArrow) =>{
    const high = todos.filter((todo) => todo.status === "完了");
    const middle = todos.filter((todo) => todo.status === "進行中");
    const low = todos.filter((todo) => todo.status === "着手前");
    if(statusArrow==="▲"){
      setTodos([...low, ...middle, ...high]);
      setStatusArrow("▼");
    }else{
      setTodos([...high, ...middle, ...low])
      setStatusArrow("▲");
    }
  }
  return handleSortStatus;
}

export default useHandleSortStatus; 