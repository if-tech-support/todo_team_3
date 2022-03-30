import { useRecoilState } from "recoil"
import { todosState } from "../../pages/atoms/atom"

const useHandleSortCreate = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleSortCreate=(todos, createArrow, setCreateArrow) =>{
    const targetTodos = [...todos]
    if(createArrow==="▲"){
      targetTodos.sort((a,b)=>{
        return new Date(a.createDate) - new Date(b.createDate)
      });
      setTodos(targetTodos);
      setCreateArrow("▼");
    }else{
      targetTodos.sort((a,b)=>{
        return new Date(b.createDate) - new Date(a.createDate)
      })
      setTodos(targetTodos);
      setCreateArrow("▲");
    }
  }
  return handleSortCreate;
}

export default useHandleSortCreate;