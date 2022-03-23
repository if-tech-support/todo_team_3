import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Box, HStack, Text, Textarea } from "@chakra-ui/react";

import { todosState } from "../../../atoms/atom";

const Context = () => {
  const { query } = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  })

  const handleEditContext = (text) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };
    setTodos(() => {
      if (todos[foundTodo].text) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          text: text,
        });
      }
    });
  };

  
  return (
    <>
      <HStack spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            内容:
          </Text>
        </Box>
        <Box>
          <Textarea
            width="800px"
            height="47px"
            borderColor="#bebaba"
            borderWidth="2px"
            value={editTodo[0]?.text}
            onChange={(e)=>handleEditContext(e.target.value)}
          />
        </Box>
      </HStack>
    </>
  );
};

export default Context;
