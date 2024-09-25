import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Container>
      <Grid container spacing={2} marginTop={2}>
        <h1>Welcome to the application</h1>
      </Grid>
    </Container>
  );
}
