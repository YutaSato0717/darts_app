import { Box, Button, Center, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate();

  const submit = () => {
    navigate("/home")
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
    <form onSubmit={submit}>
      <TextInput mt="md" label="email" type="mail" />
      <TextInput mt="md" label="password" type="password" />
      <Center><Button mt="md" type="submit">Login</Button></Center>
    </form>
    </Box>
  )
}

export default Login