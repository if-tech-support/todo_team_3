import { useRecoilState } from "recoil";
import { Box, HStack, Input, Text } from "@chakra-ui/react";

import { todosState } from "../../../atoms/atom";
import { useRouter } from "next/router";

const Task = () => {
  const { query } = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  });

  const hadleEditTask = (title) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };
    setTodos(() => {
      if (todos[foundTodo].title) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          title: title,
        });
      }
    });
  };

  console.log(todos);
  

  // const handleChange = (e) => {
  //   setTodos(todos.map((todo) => {
  //     if (todo.id === editTodo[0]?.id) {
  //       return todo.title = e.target.value;
  //     }
  //   }))
  // }

  return (
    <>
      <HStack marginTop="48px" spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            タスク名:
          </Text>
        </Box>

        <Box>
          <Input
            width="800px"
            height="47px"
            borderColor="#bebaba"
            borderWidth="2px"
            margin="auto"
            value={editTodo[0]?.title || ""}
            onChange={(e) => hadleEditTask(e.target.value)}
          />
        </Box>
      </HStack>
    </>
  );
};

export default Task;
