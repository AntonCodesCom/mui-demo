import { Drawer } from '@mui/material';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export default function CommonSidebar({
  open = false,
  onClose = () => {},
}: Props) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div>sidebar</div>
    </Drawer>
  );
}
