import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Input, Select, Text } from "@chakra-ui/react";

const Search = ({ setStatus, setPriority, setInputFilter }) => {

  return (
    <Container m='0' mt='10' p='3' bg='gray.100' borderRadius='10px'  display='flex' justifyContent='space-around' alignItems='center'>
      <Box>
        <Text textAlign='center'>キーワード</Text>
        <Box>
          <Input 
            placeholder='キーワードを入力'
            onChange={(e) => setInputFilter(e.target.value)}
          />
        </Box>
      </Box>

      <Box>
        <Text textAlign='center'>ステータス</Text>
        <Select
          defaultValue={'すべて'}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='すべて'>すべて</option>
          <option value='着手前'>着手前</option>
          <option value='進行中'>進行中</option>
          <option value='完了'>完了</option>
        </Select>
      </Box>

      <Box>
        <Text textAlign='center'>優先度</Text>
        <Select 
          defaultValue={'すべて'}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='すべて'>すべて</option>
          <option value='低'>低</option>
          <option value='中'>中</option>
          <option value='高'>高</option>
        </Select>
      </Box>
    </Container>
  );
};

export default Search;
