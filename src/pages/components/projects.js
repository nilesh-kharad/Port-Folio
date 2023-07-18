import { useState } from 'react';
import { Drawer, Textarea, Button, Grid, Box, TextInput, Group } from '@mantine/core';

export const Projects = (prop) => {
  

 
  return (
    <>
      <Drawer
        opened={prop.opened}
        onClose={() => prop.setOpened(false)}
        title="Projects"
        position="top"
        padding="xl"
        size="sm">
       
      </Drawer>
    </>
  );
}