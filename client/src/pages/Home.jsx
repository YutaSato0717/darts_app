import { Title } from '@mantine/core';
import { Container } from '@mantine/core';
import { Button } from '@mantine/core';
import { Box, Center } from '@mantine/core';
import {AppShell,Navbar,Header,MediaQuery,Burger,
  useMantineTheme} from '@mantine/core';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import { Card} from '@mantine/core';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';

function Home() {
  const navigate = useNavigate();

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
  
    const submit01 = () => {
      navigate('/zeroone');
    };
  
    const submitcricket = () => {
      navigate('/cricket');
    };
  
    const submitcountup = () => {
      navigate('/countup');
    };

    const Logout = () => {
      navigate('/');
    };

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

              <form onSubmit={Logout}>
                 <Center>
                      <Button mt="md" type="Logout" variant="subtle" color="dark">
                        LOG OUT
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
        <Center><Title order={2}>プレイヤーデータ</Title></Center>
        <br></br>
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Container>
            <center>
            <h3>
            01 GAME
            </h3>
            </center>
        
          </Container>
          <center>
          <p>Average Stats :65.4</p>
          <p>Win Rate :56.2%</p>
          </center>
         
         
          <Graph1 />{/* Graph1 コンポーネントを表示 */}
          <p></p>
  
        <br></br>
        </Card.Section>
        </Card>
  
        <br></br>
  
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          
          <Container>

           <center>
            <h3>
            CRICKET
           </h3>
           </center>
        </Container>
        <center>
          <p>Average Stats :2.28</p>
          <p>Win Rate :64.6%</p>
        </center>
          <Graph2 />{/* Graph2 コンポーネントを表示 */} 
  <p></p>
  
        <br></br>
        </Card.Section>
        </Card>
  
        <br></br>
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Container>
            <center>
          <h3>
        COUNT UP
        </h3>
        </center>
          </Container>
          <center>
          <p>Average Score :586</p>
          <p>Best Score :734</p>
          </center>
          <Graph3 />{/* Graph2 コンポーネントを表示 */} 
  <p></p>
  
        <br></br>
        </Card.Section>
        </Card>
  
        <br></br>
  
        
      </Box>
  
    </AppShell>
    );
  }
  
export default Home