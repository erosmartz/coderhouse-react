import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const styles = {
  appBar: {
    top: "auto",
    bottom: 0,
    padding: 1,
  },
};

const Footer = () => {
  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Container maxWidth="xl">
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Eros Martínez © {new Date().getFullYear()} Construido con React.
            </div>{" "}
            <div>Para Proyecto de React @ CODERHOUSE</div>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
