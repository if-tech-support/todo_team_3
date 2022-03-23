import { Box, HStack, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Border from "../atoms/Border";
import UserButton from "../atoms/Button";
import Header from "../organisms/layout/Header";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todosState } from "../../atoms/atom";

export const EditPage = () => {
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

  const hadleEditContext = (text) => {
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

  const hadleEditStatus = (status) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };
    setTodos(() => {
      if (todos[foundTodo].status) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          status: status,
        });
      }
    });
  };

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

  console.log(editTodo[0]);

  return (
    <>
      <Header />
      {/* Tsak */}
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
      <Border />

      {/* Text */}
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
            onChange={(e) => hadleEditContext(e.target.value)}
          />
        </Box>
      </HStack>
      <Border />

      {/* Status */}
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
            onChange={(e) => hadleEditStatus(e.target.value)}
          >
            <option value="着手前">着手前</option>
            <option value="進行中">進行中</option>
            <option value="完了">完了</option>
          </Select>
        </Box>
      </HStack>
      <Border />

      {/* Priority */}
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
            placeholder="------------"
            borderColor="#bebaba"
            borderWidth="2px"
            value={editTodo[0]?.priority}
            onChange={(e) => hadleEditPriority(e.target.value)}
          >
            <option value="高">高</option>
            <option value="中">中</option>
            <option value="低">低</option>
          </Select>
        </Box>
      </HStack>

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
          url={"/"}
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
