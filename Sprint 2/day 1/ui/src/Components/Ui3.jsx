import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export const Ui3 = () => {
  return (
    <div>
      <SimpleGrid columns={[3]} spacing="40px">
        <Box>
          <Grid
            templateRows="repeat(6,1fr)"
            templateColumns="repeat(6,1fr)"
            gap={5}
            height="500px"
          >
            <GridItem md="" rowSpan={[1, 2]} colSpan={[5, 3]} bg="yellow" />
            <GridItem rowSpan={[1, 2]} colSpan={[5, 3]} bg="yellow" />
            <GridItem rowSpan={[1, 2]} colSpan={[5, 6]} bg="tomato" />
            <GridItem rowSpan={[1, 2]} colSpan={[5, 2]} bg="green" />
            <GridItem rowSpan={[1, 2]} colSpan={[5, 2]} bg="green" />
            <GridItem rowSpan={[1, 2]} colSpan={[5, 2]} bg="green" />
          </Grid>
        </Box>
      </SimpleGrid>
    </div>
  );
};
