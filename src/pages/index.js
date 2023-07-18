import { useState } from 'react';
import { Button, createStyles, Text, Mark, Group, Image, Box, Grid } from '@mantine/core';
import { Enquiry } from './components/enquiry'
import { Projects } from './components/projects'

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [openedProjects, setOpenedProjects] = useState(false);

  // const animation = () => {
  //   return (<>
  //     <div class="container" >
  //       <Image radius={20} style={{ zIndex: '-10', height: '50vw' }}
  //         src="../../profilePic.jpeg"
  //         alt="background" class="profile-photo" />
  //       <div class="logo-container">
  //         <Image radius={20} style={{ zIndex: '-10', height: '50vw' }}
  //           src="../../profilePic.jpeg"
  //           alt="background" class="logo" />
  //         <Image radius={20} style={{ zIndex: '-10', height: '50vw' }}
  //           src="../../profilePic.jpeg"
  //           alt="background" class="logo" />
  //         <Image radius={20} style={{ zIndex: '-10', height: '50vw' }}
  //           src="../../profilePic.jpeg"
  //           alt="background" class="logo" />
  //       </div>
  //     </div>
  //   </>)
  // }

  return (
    <>
      <Box style={{ position: 'fixed', right: '10px', marginTop: '15px' }}>
        <Grid>
          <Grid.Col span={3}>
            <Group position="center">
              <Button variant="subtle" compact uppercase onClick={() => setOpenedProjects(true)}>Academics</Button>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group position="center">
              <Button variant="subtle" compact uppercase onClick={() => setOpenedProjects(true)}>Experiance</Button>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group position="center">
              <Button variant="subtle" compact uppercase onClick={() => setOpenedProjects(true)}>Projects</Button>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group position="center">
              <Button variant="subtle" compact uppercase onClick={() => setOpened(true)}>Enquiry</Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>
      <Box style={{ position: 'absolute', top: '16vh', left: '10vw' }}>
        <Grid>
          <Grid.Col span={6}>
            <Text style={{ fontSize: '15px', fontWeight: '400' }}>
              Hi,
            </Text>
            <Text style={{ fontSize: '30px', fontWeight: '700' }}>
              I'm Nilesh Kharad...
            </Text>
            <Text style={{ fontSize: '60px', fontWeight: '700' }}>
              Web-Developer
            </Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Image radius={20} style={{ zIndex: '-10', height: '50vw' }}
              src="../../profilePic.jpeg"
              alt="background" />
            {/* {animation} */}
          </Grid.Col>
        </Grid>
      </Box>
      <Enquiry opened={opened} setOpened={setOpened} />
      <Projects opened={openedProjects} setOpened={setOpenedProjects} />
    </>
  );
}