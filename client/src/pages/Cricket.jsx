import React, { useState } from 'react';
import { Title, Container, Button, Box, Center, AppShell, Navbar, Header, MediaQuery, Burger, useMantineTheme, Card, TextInput, Radio } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function Cricket() {
  const navigate = useNavigate();
  const [stats, setStats] = useState('');
  const [selectedOption, setSelectedOption] = useState(null); 
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

 
  const handleNameChange = (e) => {
    setStats(e.target.value);
};



const handleSubmit = () => {
  const isNumeric = /^[\d.]+$/.test(stats);
  if (isNumeric && selectedOption) {
        // 必要な条件を満たしている場合の処理をここに書く
        navigate("/record_succeed");
      } else if (!isNumeric) {
        // 数字と小数点以外の文字が含まれている場合のエラーハンドリング
        alert("スタッツに数字と小数点のみを入力してください");
      } else if (!selectedOption) {
        // 選択されたオプションがない場合のエラーハンドリング
        alert("WIn or LOSEを選択してください");
      }
};

  const home = () => {
    navigate('/home');
  };
  const submit01 = () => {
    navigate('/zeroone');
  };

  const submitcricket = () => {
    navigate('/cricket');
  };

  const submitcountup = () => {
    navigate('/countup');
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 100, lg: 200 }}>
          <form onSubmit={home}>
            <Center>
              <Button mt="md" type="home" variant="subtle" color="dark">
                HOME
              </Button>
            </Center>
          </form>

          <form onSubmit={submit01}>
            <Center>
              <Button mt="md" type="submit01" variant="subtle" color="dark">
                01 GAME
              </Button>
            </Center>
          </form>

          <form onSubmit={submitcricket}>
            <Center>
              <Button mt="md" type="submitcricket" variant="subtle" color="dark">
                CRICKET
              </Button>
            </Center>
          </form>

          <form onSubmit={submitcountup}>
            <Center>
              <Button mt="md" type="submitcountup" variant="subtle" color="dark">
                COUNT UP
              </Button>
            </Center>
          </form>
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

            <Title order={1}>AizuDarts</Title>
          </div>
        </Header>
      }
    >
      <Box sx={{ maxWidth: 1000 }} mx="auto">
        <Center>
          <Title order={2}>CRICKETの記録</Title>
        </Center>
        <br></br>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Container>
              <h3>CRICKET</h3>
            </Container>
            <Radio.Group
              name="favoriteFramework"
              orientation="vertical"
              label="WIn or LOSE"
              offset="md"
              withAsterisk
              // ラジオボタンの値が変更されたときに選択したオプションを更新
              onChange={(value) => setSelectedOption(value)}
            >
              <Radio value="win" label="WIN" />
              <Radio value="lose" label="LOSE" />
            </Radio.Group>

            <TextInput
              label="Stats"
              placeholder="Enter your stats"
              value={stats}
              onChange={handleNameChange}
            />

            <p></p>
            <Center>
              <Container>
                <Button mt="md" onClick={handleSubmit}>
                  Submit
                </Button>
              </Container>
             
            </Center>
            <br></br>
          </Card.Section>
        </Card>

        
      </Box>
    </AppShell>
  );
}

export default Cricket;