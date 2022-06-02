import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export const Ui2 = () => {
  return (
    <div>
      <Grid templateColumns="repeat(2,1fr)" p={10} gap={10}>
        <GridItem h="500px">
          <Text fontSize="4xl">MOBILE</Text>
          <Grid gap={5} m={5} templateRows="repeat(3,1fr)" h="500px">
            <GridItem bg="#9F7AEA" />
            <GridItem bg="tomato" />
            <GridItem bg="#63B3ED" />
          </Grid>
        </GridItem>

        <GridItem h="200px">
          <Text fontSize="4xl">DESKTOP</Text>
          <Grid
            h="500px"
            m={5}
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5,1fr)"
            gap={5}
          >
            <GridItem colSpan={3} rowSpan={2} bg="#9F7AEA" />
            <GridItem rowSpan={3} colSpan={2} bg="tomato" />
            <GridItem colSpan={3} bg="#63B3ED" />
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};
