import React, { useState } from 'react';
import { Title, Container, Button, Box, Center, AppShell, Navbar, Header, MediaQuery, Burger, useMantineTheme, Card, TextInput, Radio } from '@mantine/core'; // Radio を追加
import { useNavigate } from 'react-router-dom';

function Zeroone() {
  const navigate = useNavigate();
  const [stats, setName] = useState(''); // フォームの値を管理するステート

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const submit = () => {
    navigate("/home")
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
          <Title order={2}>01 GAMEの記録</Title>
        </Center>
        <br></br>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Container>
              <h3>01 GAME</h3>
            </Container>
            <Radio.Group
              name="favoriteFramework"
              orientation="vertical"
              label="WIn or LOSE"
              offset="md"
              withAsterisk
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
                <Button mt="md" onClick={submit}>
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

export default Zeroone;


