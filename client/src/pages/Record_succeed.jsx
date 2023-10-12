import { Box,TextInput,Radio,Center,Button} from '@mantine/core';
import { useState } from 'react';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Title,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';


function Record_succeed() {
  const navigate = useNavigate();
  
  const theme = useMantineTheme();
  const [opened] = useState(false);
  
  const submithome = () => {
    navigate("/home")
  }

  return (

      <><Center><h3>データが保存されました。</h3></Center>
      <Center>
              
                <Button mt="md" onClick={submithome}>
                Home
                </Button>
              
             
            </Center>
      <br /><br />
      
      </>
    )
}

export default Record_succeed