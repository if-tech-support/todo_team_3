import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Box} from "@chakra-ui/react";

import { todosState } from "../../atoms/atom";
import Border from "../../components/atoms/Border";
import UserButton from "../../components/atoms/Button";
import Context from "../../components/organisms/layout/Context";
import Header from "../../components/organisms/layout/Header";
import Priority from "../../components/organisms/layout/Priority";
import Status from "../../components/organisms/layout/Status";
import Task from "../../components/organisms/layout/Task";

const edittask = () => {
  // react-hooksのルール通りではないと警告が出る為、一時的にeslintを無効化
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todos, setTodos] = useRecoilState(todosState)
  
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(router.query.id);
  })

  return (
    <>
      <Header />
      <Task editTodo={editTodo} />
      <Border />
      <Context editTodo={editTodo} />
      <Border />
      <Status />
      <Border />
      <Priority />
      <Border />
      <Box pos="absolute" bottom="8" right="0">
        <UserButton
          colorScheme={"red"}
          color={"#FFFFFF"}
          text={"削除"}
          mr={"28px"}
        />
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"28px"}
        />
        <UserButton
          colorScheme={"blue"}
          color={"#FFFFFF"}
          text={"保存"}
          mr={"33px"}
        />
      </Box>
    </>
  );
};

export default edittask;