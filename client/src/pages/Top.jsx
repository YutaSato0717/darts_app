import { Box, Button, Center,Text } from "@mantine/core"
import { Link } from "react-router-dom"
import Image from "../pages/AizuDarts.png";

function Top() {

  return (
    
    <Box sx={{ maxWidth:200 }} mx="auto">
      <Text
      size="100px"
      color="white"
      > </Text>
       <Center><img  width={500} src={Image} /></Center>
      <Center><Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: 'indigo', to: 'green', deg: 50 }}
      size="70px"
      weight={900}
      style={{ fontFamily: 'Greycliff CF, sans-serif' }}
    >
      
      </Text></Center>
     
      <Center><Button component={Link} to="/login">Login</Button></Center>
      <Center><Text mt="md"></Text></Center>
      <Center><Button component={Link} to="/signup">SignUp</Button></Center>
    </Box>
  )
}

export default Top
