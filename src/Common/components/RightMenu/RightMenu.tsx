import { Drawer } from '@mui/material';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export default function CommonRightMenu({
  open = false,
  onClose = () => {},
}: Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      Right Menu
    </Drawer>
  );
}
