import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {
  Box,
  Container,
  Stack,
  Flex,
  Spacer,
  Divider,
  Button,
} from '@chakra-ui/react';

import { todosState } from '../atoms/atom';
import UserButton from './atoms/Button';

export default function Detail() {
  const router = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);

  const handleClickDelete = () => {
    if(confirm("下記ToDoを削除しますか？")){
      const newTodos = todos.filter((todo) => todo.id !== Number(router.query.id));   
      setTodos(newTodos);
    router.push("/");
    }
  };
  
  const todo = todos.filter((todo) => {
    return todo.id === Number(router.query.id)
  })

  return (
    <>
      <Container mt={["80px","110px"]} maxW="container.lg">
        <Stack spacing={[2,8]}>
          <Flex direction={["column","row"]}>
            <Flex w={24} minW={24}>
              <Box>タスク名</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            {/* useRouter 使用時、１回目にundefinedが入りエラーを起こす為、オプショナルチェーンでundefinedを許可。 */}
            <Box ml={[0,8]}>{todo[0]?.title}</Box>
          </Flex>
          <Divider borderColor='gray' borderBottomWidth='2px' />
          <Flex minH={44} direction={["column","row"]}>
            <Flex w={24} minW={24}>
              <Box>内容</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={[0,8]}>
              {todo[0]?.text}
            </Box>
          </Flex>
          <Divider borderColor='gray' borderBottomWidth='2px' />
          <Flex>
            <Flex w={24} minW={24}>
              <Box>ステータス</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={8}>{todo[0]?.status}</Box>
          </Flex>
          <Divider borderColor='gray' borderBottomWidth='2px' />
          <Flex>
            <Flex w={24} minW={24}>
              <Box>優先度</Box>
              <Spacer />
              <Box>:</Box>
            </Flex>
            <Box ml={8}>{todo[0]?.priority}</Box>
          </Flex>
        </Stack>
      </Container>
      <Container maxW="container.lg" pos="fixed" bottom="6">
        <Flex>
          <Spacer/>
            <Button
          colorScheme={"red"}
          mr={"28px"}
          onClick={handleClickDelete}
        >削除</Button>
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"16px"}
          url={"/"}
        />
        </Flex>
      </Container>
    </>
  );
}
