import { Box, Button, Center, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // useState を追加

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState(""); // フォームの値を管理するステート（name）を追加
  const [password, setPassword] = useState(""); // フォームの値を管理するステート（password）を追加

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームが送信されたときの処理を実装する

    if (name && password) {
      // name と password が入力されているか確認
      navigate("/home");
    } else {
      alert("nameとpasswordを入力してください");
    }
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          mt="md"
          label="name"
          type="name"
          withAsterisk
          value={name}
          onChange={(e) => setName(e.target.value)} // name の値を更新
        />
        <TextInput
          mt="md"
          label="password"
          type="password"
          withAsterisk
          value={password}
          onChange={(e) => setPassword(e.target.value)} // password の値を更新
        />
        <Center>
          <Button mt="md" type="submit">Login</Button>
        </Center>
      </form>
    </Box>
  )
}

export default Login;
