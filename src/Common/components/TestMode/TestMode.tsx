import { BugReport, ExpandMore } from '@mui/icons-material';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function CommonTestMode() {
  const [on] = useState(false);
  return (
    <>
      <ButtonBase
        sx={{
          position: 'relative',
          px: 0.5,
          py: 0.25,
          borderRadius: '4px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: on ? 'warning.light' : 'action.hover',
            opacity: on ? 0.2 : 1,
            borderRadius: '4px',
          }}
        />
        <Stack direction="row" position="relative">
          <BugReport
            sx={{
              fill: ({ palette }) =>
                on ? palette.warning.main : palette.text.disabled,
            }}
          />
          <Typography ml={0.5} mr={on ? 0.4 : 0.25}>
            {on ? 'Test mode: On' : 'Test mode: Off'}
          </Typography>
          <ExpandMore />
        </Stack>
      </ButtonBase>
    </>
  );
}
