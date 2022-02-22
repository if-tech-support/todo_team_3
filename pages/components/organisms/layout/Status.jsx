import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Box, HStack, Select, Text } from "@chakra-ui/react";

import { todosState } from "../../../atoms/atom";

const Status = () => {
  const { query } = useRouter()
  const [todos, setTodos] = useRecoilState(todosState);
    
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  })

  const handleChange = (e) => {
    setTodos(todos.map((todo) => {
      if (todo.id === editTodo[0]?.id) {
        return todo.title = e.target.value;
      }
    }))
  }

  return (
    <>
      <HStack spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            ステータス:
          </Text>
        </Box>

        <Box>
          <Select
            width="163px"
            height="52px"
            placeholder="------------"
            borderColor="#bebaba"
            borderWidth="2px"
            value={editTodo[0]?.status}
            onChange={handleChange}
          >
            <option value="着手前">着手前</option>
            <option value="進行中">進行中</option>
            <option value="完了">完了</option>
          </Select>
        </Box>
      </HStack>
    </>
  );
};

export default Status;
