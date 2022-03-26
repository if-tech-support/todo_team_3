import { useRecoilState } from "recoil";
import { todosState } from "../../pages/atoms/atom";

const useHandleSortUpdate = () => {
  const [todos, setTodos] = useRecoilState(todosState)

  const handleSortUpdate=(todos, updateArrow, setUpdateArrow) =>{
    const targetTodos = [...todos]
    if(updateArrow==="▲"){
      targetTodos.sort((a,b)=>{
        return new Date(a.updateDate) - new Date(b.updateDate)
      });
      setTodos(targetTodos);
      setUpdateArrow("▼");
    }else{
      targetTodos.sort((a,b)=>{
        return new Date(b.updateDate) - new Date(a.updateDate)
      })
      setTodos(targetTodos);
      setUpdateArrow("▲");
    }
  }
  return handleSortUpdate;
}

export default useHandleSortUpdate