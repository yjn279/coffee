import { styled } from '@mui/material/styles';

import { 
  AppBar,
  Box,
  Fab,
  IconButton,
  Toolbar,
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/More';
import SearchIcon from '@mui/icons-material/Search';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});


export default function BottomBar({ open, onMainClick, onMenuClick }) {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledFab color="secondary" aria-label="add" onClick={onMainClick}>
        {open ? (
          <CloseIcon />
        ) : (
          <AddIcon />
        )}
      </StyledFab>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}
