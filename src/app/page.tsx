//@ts-nocheck
import Image from "next/image";
import styles from "./page.module.css";
import paginatedRestService from "@/services/rest/PaginatedRestService";
import Card from "@/components/commons/card/Card";
import { Box, Container, Hidden } from "@mui/material";

export default async function Home() {
  const data = await paginatedRestService.getDataByPage(1);
  return (
    <main className={styles.main}>
      <Container maxWidth="lg">

        <Box sx={{ display: 'flex', overflow: 'Hidden' }}>
          {
            data.results.games.map(item => {
              return <Card game={item} />
            })
          }
        </Box>
      </Container>
    </main>
  );
}
