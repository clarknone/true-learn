import { useLayoutContext } from "@/context/layout";
import { DRAWER_WIDTH } from "@/lib/constant/layout";
import { NAV_LINKS } from "@/lib/data/navLink";
import { INavLink, LayoutEnum } from "@/lib/interface/layout";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IProps {
  open?: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}
let activeLayout = LayoutEnum.Admin;

export default function AppDrawer({ open, onClose, isMobile }: IProps) {
  const { layout } = useLayoutContext();
  const router = useRouter();
  const links = NAV_LINKS[layout];

  useEffect(() => {
    if (layout !== activeLayout) {
      router.push(links[0].path);
    }
    activeLayout = layout;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout]);

  return (
    <>
      <Box>
        <Drawer
          sx={{
            display: { md: isMobile ? "none" : "block", xs: isMobile ? "block" : "none" },
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              p: "1rem",
            },
          }}
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? open : true}
          onClose={() => onClose && onClose()}
          anchor="left"
        >
          <Link href="/">
            <Typography variant="h4" sx={{ px: { xs: "2rem", md: "1rem" } }}>
              TrueLearn
            </Typography>
          </Link>

          <Stack mt="2rem" rowGap="0.5em">
            {links.map((item) => (
              <Link key={item.path} href={item.path}>
                <Stack direction="row" columnGap="1em" alignItems="center">
                  <Box sx={{ fontSize: "20px" }}>
                    <item.icon fontSize={"inherit"} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ ml: 2 }}>
                    {item.title}
                  </Typography>
                </Stack>
              </Link>
            ))}
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}
