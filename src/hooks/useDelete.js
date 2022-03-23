import { useRecoilState } from "recoil";
import { todosState } from "../../pages/atoms/atom";
import { useRouter } from 'next/router';

const useDelete = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const router = useRouter();
  const handleClickDelete=() => {
    if (confirm("下記ToDoを削除しますか？")) {
      const newTodos = todos.filter(
        (todo) => todo.id !== Number(router.query.id)
      );
      setTodos(newTodos);
      router.push("/");
    }
  }
  return handleClickDelete ;
};

export default useDelete;
