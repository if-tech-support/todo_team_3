import Link from "next/link";
import { useRecoilState } from "recoil";
import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { todosState } from "../atoms/atom";
import StatusSelect from "./atoms/StatusSelect";
import PrioritySelect from "./atoms/PrioritySelect";
import useMultipleChecked from "./atoms/useMultipleChecked";
import useHandleSortStatus from "../../src/hooks/useHandleSortStatus";
import useHandleSortPriority from "../../src/hooks/useHandleSortPriority";
import useHandleSortCreate from "../../src/hooks/useHandleSortCreate";
import useHandleSortUpdate from "../../src/hooks/useHandleSortUpdate";

const TodoList = ({ searchTodos }) => {
  const [todos, setTodos] = useRecoilState(todosState);

  const [statusArrow, setStatusArrow] = useState("▲");
  const [priorityArrow, setPriorityArrow] = useState("▲");
  const [createArrow, setCreateArrow] = useState("▲");
  const [updateArrow, setUpdateArrow] = useState("▲");
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  const handleSortStatus = useHandleSortStatus();
  const handleSortPriority = useHandleSortPriority();
  const handleSortCreate = useHandleSortCreate();
  const handleSortUpdate = useHandleSortUpdate();

  const renderStatus = (todo) => {
    switch (todo.status) {
      case "着手前":
        return "orange";
        break;

      case "進行中":
        return "skyblue";
        break;

      case "完了":
        return "green";
        break;
    }
  };

  const renderPriority = (todo) => {
    switch (todo.priority) {
      case "低":
        return "green";
        break;

      case "中":
        return "yellow.400";
        break;

      case "高":
        return "red";
        break;
    }
  };  

  const { checked, toggleChecked, toggleCheckAll } = useMultipleChecked(
    todos.map((todo) => todo.id)
  );

  const handleClickDelete = () => {
    const newTodos = todos.filter((todo) => {
      if (!checked.includes(todo.id)) {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Box overflowX="auto">
        <Table mt="5" minW="750px">
          <Thead bg="gray.100">
            <Tr>
              <Th p={[2, 2, 3]} width="120px">
                <Flex alignItems="center" justifyContent="center">
                  <Checkbox
                    fontWeight="normal"
                    onChange={toggleCheckAll}
                    isChecked={checked.length === todos.length}
                  ></Checkbox>
                  <Box
                    fontSize={["14px", "16px"]}
                    fontWeight="normal"
                    pl={["2px", "8px"]}
                    onClick={toggleCheckAll}
                  >
                    全選択
                  </Box>
                </Flex>
              </Th>
              <Th
                p={[2, 2, 3]}
                fontSize={["14px", "16px"]}
                width="200px"
                fontWeight="normal"
              >
                タスク名
              </Th>
              <Th p={[2, 2, 3]} width="150px">
                <HStack spacing={["2px", "2px", 1]}>
                  <Text fontSize={["14px", "16px"]} fontWeight="normal">
                    ステータス
                  </Text>
                  <Button
                    colorScheme="yellow"
                    size="xs"
                    variant="outline"
                    onClick={() => {
                      handleSortStatus(todos, statusArrow, setStatusArrow);
                    }}
                  >
                    {statusArrow}
                  </Button>
                </HStack>
              </Th>
              <Th
                p={[2, 2, 3]}
                fontSize={["14px", "16px"]}
                fontWeight="normal"
                width="120px"
              >
                <HStack spacing={["2px", "2px", 1]}>
                  <Text>優先度</Text>
                  <Button
                    colorScheme="yellow"
                    size="xs"
                    variant="outline"
                    onClick={() => {
                      handleSortPriority(todos, priorityArrow, setPriorityArrow);
                    }}
                  >
                    {priorityArrow}
                  </Button>
                </HStack>
              </Th>
              <Th
                p={[2, 2, 3]}
                fontSize={["14px", "16px"]}
                fontWeight="normal"
                width="145px"
              >
                <HStack spacing={["2px", "2px", 1]}>
                  <Text>作成日時</Text>
                  <Button
                    colorScheme="yellow"
                    size="xs"
                    variant="outline"
                    onClick={() => {
                      handleSortCreate(todos, createArrow, setCreateArrow);
                    }}
                  >
                    {createArrow}
                  </Button>
                </HStack>
              </Th>
              <Th
                p={[2, 2, 3]}
                fontSize={["14px", "16px"]}
                fontWeight="normal"
                width="145px"
              >
                <HStack spacing={["2px", "2px", 1]}>
                  <Text>更新日時</Text>
                  <Button
                    colorScheme="yellow"
                    size="xs"
                    variant="outline"
                    onClick={() => {
                      handleSortUpdate(todos, updateArrow, setUpdateArrow);
                    }}
                  >
                    {updateArrow}
                  </Button>
                </HStack>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {searchTodos ? 
              searchTodos.map((todo) => (
                <Tr key={todo.id}>
                  <Td p={[1, 2]} textAlign="center">
                  <Box>
                        <Checkbox
                          onChange={() => toggleChecked(todo.id)}
                          isChecked={checked.includes(todo.id)}
                        />
                      </Box>
                      </Td>
                    <Td px={[1, 2]} py={[2, 3]}>
                      <Flex justify="start" align="center">
                        <Link href={`/todos/${todo.id}`} passHref>
                          <Text
                            cursor="pointer"
                            _hover={{ opacity: 0.7 }}
                            fontSize={["14px", "16px"]}
                            lineHeight="1.4"
                          >
                            {todo.title}
                          </Text>
                        </Link>
                        <Box ml="2px">
                          <Link href={`/todos/${todo.id}/edittask`} passHref>
                            <Button
                              size="xs"
                              colorScheme="teal"
                              variant="outline"
                              m={[0, "2px", 1]}
                            >
                              <EditIcon />
                            </Button>
                          </Link>
                        </Box>
                      </Flex>
                    </Td>

                    <Td p={[1, 2]} color={renderStatus(todo)}>
                      <StatusSelect todo={todo} />
                    </Td>
                    <Td p={[1, 2]} color={renderPriority(todo)}>
                      <PrioritySelect todo={todo} />
                    </Td>
                    <Td px={[1, 2]} py={[2, 3]} fontSize={["14px", "16px"]}>
                      <Box lineHeight="1.4">{todo.updateDate}</Box>
                    </Td>
                    <Td px={[1, 2]} py={[2, 3]} fontSize={["14px", "16px"]}>
                      <Box lineHeight="1.4">{todo.createDate}</Box>
                    </Td>
                  </Tr>
                ))
              : todos.map((todo) => (
                  <Tr key={todo.id}>
                    <Td p={[1, 2]} textAlign="center">
                      <Box>
                        <Checkbox
                          onChange={() => toggleChecked(todo.id)}
                          isChecked={checked.includes(todo.id)}
                        />
                      </Box>
                    </Td>
                    <Td px={[1, 2]} py={[2, 3]}>
                      <Flex justify="start" align="center">
                        <Link href={`/todos/${todo.id}`} passHref>
                          <Text
                            cursor="pointer"
                            _hover={{ opacity: 0.7 }}
                            fontSize={["14px", "16px"]}
                            lineHeight="1.4"
                          >
                            {todo.title}
                          </Text>
                        </Link>
                        <Box ml="2px">
                          <Link href={`/todos/${todo.id}/edittask`} passHref>
                            <Button
                              size="xs"
                              colorScheme="teal"
                              variant="outline"
                              m={[0, "2px", 1]}
                            >
                              <EditIcon />
                            </Button>
                          </Link>
                        </Box>
                      </Flex>
                    </Td>
                    <Td p={[1, 2]} color={renderStatus(todo)}>
                      <StatusSelect todo={todo} />
                    </Td>
                    <Td p={[1, 2]} color={renderPriority(todo)}>
                      <PrioritySelect todo={todo} />
                    </Td>
                    <Td px={[1, 2]} py={[2, 3]} fontSize={["14px", "16px"]}>
                      <Box lineHeight="1.4">{todo.createDate}</Box>
                    </Td>
                    <Td px={[1, 2]} py={[2, 3]} fontSize={["14px", "16px"]}>
                      <Box lineHeight="1.4">{todo.updateDate}</Box>
                    </Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </Box>

      <Button
        colorScheme={"red"}
        ml={["4", "4", 0]}
        my={["4", "4", "6"]}
        size={buttonSize}
        onClick={handleClickDelete}
      >
        選択したTodoを削除
      </Button>
    </>
  );
};

export default TodoList;
