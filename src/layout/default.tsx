import AppToolBar from "@/component/layout/appBar";
import AppDrawer from "@/component/layout/drawer";
import { DRAWER_WIDTH } from "@/lib/constant/layout";
import { Box, Container, Stack } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardLayout({ children, title }: IProps) {
  return (
    <>
      <Container sx={{ backgroundColor: "#FFFFFF" }} disableGutters maxWidth={false}>
        <Stack direction="row" columnGap={0}>
          <Box>
            <AppDrawer />
          </Box>
          <Stack
            sx={{
              backgroundColor: "#F0F0F0",
              width: { xs: "100%", md: `calc(100% - ${DRAWER_WIDTH})` },
              minHeight: `100vh`,
            }}
          >
            <Box>
              <AppToolBar title={title} />
            </Box>

            <Box mt={"64px"} p={{ xs: "1em", md: "2em" }} flexGrow={1}>
              {children}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
