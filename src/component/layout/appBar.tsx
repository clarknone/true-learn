import { DRAWER_WIDTH } from "@/lib/constant/layout";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import AppDrawer from "./drawer";
import { useLayoutContext } from "@/context/layout";
import { LayoutEnum } from "@/lib/interface/layout";

interface Props {
  title: string;
}

export default function AppToolBar(props: Props) {
  const { title } = props;
  const theme = useTheme();
  const { layout, setLayout } = useLayoutContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [layoutMenu, setLayoutMenu] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function updateActiveLayout(item: LayoutEnum) {
    setLayout(item);
    setLayoutMenu(null);
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        elevation={0}
        sx={{ background: "#FFF", width: { xs: "100%", md: `calc(100% - ${DRAWER_WIDTH})` } }}
      >
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <FaBars fontSize="large" />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: theme.palette.primary.main,
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>
          <Box>
            <Button size="small" onClick={(e) => setLayoutMenu(e.currentTarget)}>
              <Typography component="span" mr="0.5em">
                {layout}
              </Typography>
              <FaAngleDown />
            </Button>

            <Menu anchorEl={layoutMenu} open={!!layoutMenu} onClose={() => setLayoutMenu(null)}>
              {Object.values(LayoutEnum).map((item) => (
                <MenuItem key={item} onClick={() => updateActiveLayout(item)}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <AppDrawer isMobile={true} open={mobileOpen} onClose={handleDrawerToggle} />
    </Box>
  );
}
