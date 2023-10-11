import { Box,TextInput,Radio,Center,Button} from '@mantine/core';
import { useState } from 'react';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Title,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';


function Recruit_succeed() {
  const navigate = useNavigate();
  const submitreport = () => {
    navigate("/report")
  }
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const submitapply = () => {
    navigate("/search")
  }
  const submithome = () => {
    navigate("/home")
  }
  const submitrecruit = () => {
    navigate("/recruit")
  }
  const submitprofile = () => {
    navigate("/profile")
  }

  return (

      <><Center><h3>募集が完了しました。</h3></Center>
      <Center><form onSubmit={submithome}>
        <Button mt="md" type="submithome" variant="outline">ホームへ戻る</Button>
      </form></Center>
      <br /><br />
      <Center><h4>募集内容を確認したい方↓をクリック</h4></Center>
      <Center><form onSubmit={submitprofile}>
        <Button mt="md" type="submitprofile" variant="outline">プロフィール</Button>

      </form></Center>
      </>
    )
}

export default Recruit_succeed