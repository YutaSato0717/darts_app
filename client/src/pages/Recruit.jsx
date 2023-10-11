import { Box,TextInput,Radio,Center,Button} from '@mantine/core';
import { useState } from 'react';
import {AppShell,Navbar,Header,MediaQuery,Burger,
    useMantineTheme,Title,Avatar} from '@mantine/core';
import { useNavigate, Link} from "react-router-dom";
import { IconStar } from '@tabler/icons';

function Recruit(){
  const navigate = useNavigate();

  const submitsucceed = () => {
    navigate("/recruit_succeed")
  }
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const submitsearch = () => {
    navigate("/search")
  }
  const submithome = () => {
    navigate("/home")
  }
  const submitrecruit = () => {
    navigate("/recruit")
  }
  const submitresult = () => {
    navigate("/report_result")
  }
  const submitreport = () => {
    navigate("/report")
  }
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }
    }
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 100, lg: 200 }}>
           
            <form onSubmit={submithome}>
            <Center>
                    <Button mt="md" type="submithome" variant="subtle" color="dark">
                        ホームに戻る
                    </Button>
            </Center>
            </form>
            
          
            <form onSubmit={submitrecruit}>
                <Center>
                    <Button mt="md" type="submitrecruit" variant="subtle" color="dark">
                        参加者を募集する
                    </Button>
                </Center>
            </form>
           
           <form onSubmit={submitsearch}>
               <Center>
                    <Button mt="md" type="submitsearch" variant="subtle" color="dark">
                       イベントに参加する
                    </Button>
                </Center>
            </form>
           
           <form onSubmit={submitresult}>
               <Center>
                    <Button mt="md" type="submitresult" variant="subtle" color="dark">
                        口コミを見る
                    </Button>
                </Center>
            </form>
            <form onSubmit={submitreport}>
               <Center>
                    <Button mt="md" type="submitreport" variant="subtle" color="dark">
                        口コミをかく
                    </Button>
                </Center>
            </form>
                <Avatar component={Link} to="/Profile" radius="xl" style={{top:400,left:300}} />
                <Avatar color="blue" radius="xl" component={Link} to="/apply_favorite" style={{top:420,left:300}}>

            
                <IconStar size={24}/>
                </Avatar>
            
        </Navbar>
      }
      
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title order={1}>募集ページ</Title>
          </div>
        </Header>
      }
    >
    <Box sx={{ maxWidth: 300 }} mx="auto">
    <form onSubmit={submitsucceed}>

    <TextInput
      label="ふりがな"
      withAsterisk
    />
    <p></p>
    <TextInput
      label="名前"
      withAsterisk
    />
    <p></p>
      <Radio.Group
      name="favoriteFramework"
      orientation="vertical"
      label="性別"
      withAsterisk
    >
      <Radio value="男性" label="男性" />
      <Radio value="女性" label="女性" />
    </Radio.Group>
    <p></p>
    <TextInput
      label="年齢"
      withAsterisk
    />
    <p></p>
    <TextInput
      label="募集人数"
      withAsterisk
    />
    <p></p>
    <TextInput
      label="活動内容"
      withAsterisk
    />
    <p></p>
    <TextInput
      label="活動場所"
      withAsterisk
    />
    <p></p>
    <TextInput
      label="日時"
      withAsterisk
    />
    <p></p>
    <TextInput
      label="一言"
      withAsterisk
    />
    <p></p>
    <Center><Button mt="md" type="submitsucceed" variant="outline">募集する</Button></Center>
    </form>
    </Box>
    </AppShell>
  )
}

export default Recruit