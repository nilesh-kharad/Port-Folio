import { useState } from 'react';
import { Drawer, Textarea, Button, Grid, Box, TextInput, Group } from '@mantine/core';

export const Enquiry = (prop) => {
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [name, setName] = useState()
  const [description, setDescription] = useState()

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSetMobile = (e) => {
    setMobile(e.target.value)
  }
  const handleSetName = (e) => {
    setName(e.target.value)
  }
  const handleSetDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmitForm = (e) => {
    let objToPush = {
      email: email,
      mobile: mobile,
      name: name,
      description: description
    }
  }
  return (
    <>
      <Drawer
        opened={prop.opened}
        onClose={() => prop.setOpened(false)}
        title="CONNECT WITH ME..."
        padding="xl" transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
        size="sm">
        <Box position="center" style={{ marginTop: '5vh' }}>
          <Grid style={{ marginTop: '1vh' }}>
            <Grid.Col span={12}>
              <Group position="center">
                <TextInput
                  onChange={handleSetName}
                  placeholder="Your Name"
                  radius="md" />
              </Group>
            </Grid.Col>
          </Grid>
          <Grid style={{ marginTop: '1vh' }}>
            <Grid.Col span={12}>
              <Group position="center">
                <TextInput
                  onChange={handleSetEmail}
                  placeholder="Your email"
                  radius="md" />
              </Group>
            </Grid.Col>
          </Grid>
          <Grid style={{ marginTop: '1vh' }}>
            <Grid.Col span={12}>
              <Group position="center">
                <TextInput
                  onChange={handleSetMobile}
                  placeholder="Your Mobile Number"
                  radius="md" />
              </Group>
            </Grid.Col>
          </Grid>
          <Grid style={{ marginTop: '1vh' }}>
            <Grid.Col span={12}>
              <Group position="center">
                <Textarea
                  onChange={handleSetDescription}
                  placeholder="Describe in few words"
                  withAsterisk
                />
              </Group>
            </Grid.Col>
          </Grid>
        </Box>
        <Grid style={{ marginTop: '1vh' }}>
          <Grid.Col span={12}>
            <Group position="center">
              <Button variant="outline" compact uppercase onClick={handleSubmitForm}>Submit</Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Drawer>
    </>
  );
}