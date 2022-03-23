import {
  Button,
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Spacer,
  Divider,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { todosState, idState } from "../atoms/atom";
import BackToTopButton from "./atoms/BackToTopButton";

const NewTodo = () => {
  const router = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);
  const [id, setId] = useRecoilState(idState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const today = () => {
    const year = new Date().getFullYear() + "-";
    const month = new Date().getMonth() * 1 + 1 + "-";
    const date = new Date().getDate();
    return year + month + date;
  };

  const onSubmit = (e) => {
    setId(++id);
    const newTodo = {
      id: id,
      createDate: today(),
      updateDate: today(),
      ...e,
    };
    setTodos([...todos, newTodo]);
    router.push("/")
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container py={["20px", "60px"]} maxW="container.lg">
          <Stack spacing={[2, 6]}>
            <FormControl>
              <Flex direction={["column", "row"]}>
                <Flex minW={24} width={24}>
                  <FormLabel>タスク名</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Box>
                  <Input
                    ml={[0, 6]}
                    borderColor="#bebaba"
                    borderWidth="2px"
                    {...register("title", { required: true })}
                  />
                  <Text ml={[0, 6]}>{errors.title && "※必須項目です"}</Text>
                </Box>
              </Flex>
            </FormControl>
            <Divider borderColor="gray" borderBottomWidth="2px" />
            <FormControl>
              <Flex minH={44} direction={["column", "row"]}>
                <Flex minW={24} width={24}>
                  <FormLabel>内容</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Textarea
                  ml={[0, 6]}
                  borderColor="#bebaba"
                  borderWidth="2px"
                  h="180px"
                  {...register("text")}
                />
              </Flex>
            </FormControl>
            <Divider borderColor="gray" borderBottomWidth="2px" />
            <FormControl>
              <Flex>
                <Flex minW={26}>
                  <FormLabel>ステータス</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Select
                  ml={8}
                  borderColor="#bebaba"
                  borderWidth="2px"
                  w=""
                  {...register("status")}
                >
                  <option value="着手前">着手前</option>
                  <option value="進行中">進行中</option>
                  <option value="完了">完了</option>
                </Select>
              </Flex>
            </FormControl>
            <Divider borderColor="gray" borderBottomWidth="2px" />
            <FormControl>
              <Flex>
                <Flex minW={24} width={24}>
                  <FormLabel>優先度</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Select
                  ml={8}
                  borderColor="#bebaba"
                  borderWidth="2px"
                  w=""
                  {...register("priority")}
                >
                  <option value="低">低</option>
                  <option value="中">中</option>
                  <option value="高">高</option>
                </Select>
              </Flex>
            </FormControl>
          </Stack>
        </Container>
        <Spacer />
        <Box pos="absolute" bottom="8" right="0">
          <Button colorScheme="blue" color="#FFFFFF" mr="28px" type="submit">
            保存
          </Button>
          <BackToTopButton />
        </Box>
      </form>
    </>
  );
};

export default NewTodo;
