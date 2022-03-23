import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Box, HStack, Select, Text } from "@chakra-ui/react";

import { todosState } from "../../../atoms/atom";

const Priority = () => {
  const { query } = useRouter()
  const [todos, setTodos] = useRecoilState(todosState)
    
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  })

  const hadleEditPriority = (priority) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

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
    <>
      <HStack spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            優先度:
          </Text>
        </Box>

        <Box>
          <Select
            width="163px"
            height="52px"
            borderColor="#bebaba"
            borderWidth="2px"
            value={editTodo[0]?.priority}
            onChange={(e)=>hadleEditPriority(e.target.value)}
          >
            <option value="高">高</option>
            <option value="中">中</option>
            <option value="低">低</option>
          </Select>
        </Box>
      </HStack>
    </>
  );
};

export default Priority;
