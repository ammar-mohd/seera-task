import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Nav = () => {
  return (
    <AppBar position="static" className="bg-white" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img
            src="https://asset.brandfetch.io/idStZSMOx1/idpoqkU4Xp.png"
            alt="Seera"
            style={{ width: "100px", marginRight: "16px" }}
          />
          <Typography
            variant="h6"
            component="h1"
            style={{ flexGrow: 1 }}
            className="text-center text-black"
          >
            GitHub Search
          </Typography>
          <img
            src="https://www.seera.sa/wp-content/uploads/2020/07/Almosafer_Logo_Colour-1-850x382.png"
            alt="Almosafer"
            style={{ width: "100px", marginLeft: "16px" }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
