import React from "react";
import { Box, GridItem, Grid, Center } from "@chakra-ui/react";
export const Ui1 = () => {
  return (
    <div>
      <Box m="6" boxShadow="base" p="1" rounded="md" bg="white">
        <Center height="500px">
          <Grid h="200px" templateColumns="60% 40%" gap={10}>
            <GridItem colSpan={1}>
              Desktop
              <Grid
                h="200px"
                templateColumns="repeat(4, 1fr)"
                color="#fff"
                fontSize="1.5rem"
                fontWeight="bold"
                textTransform="uppercase"
                p={2}
              >
                <GridItem bg="blue">
                  <Center height="300px" p="2">
                    Nav
                  </Center>
                </GridItem>

                <GridItem colSpan={2} bg="#ff9f00">
                  <Center p="2" height="300px">
                    Content
                  </Center>
                </GridItem>
                <GridItem bg="red">
                  <Center p="2" height="300px">
                    Widget
                  </Center>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem colSpan={1}>
              Mobile Layout
              <Grid
                color="#fff"
                p={2}
                fontSize="1.5rem"
                fontWeight="bold"
                textTransform="uppercase"
                h="200px"
                templateRows="repeat(3, 1fr)"
              >
                <GridItem bg="blue">
                  <Center p="2" height="99px">
                    Nav
                  </Center>
                </GridItem>
                <GridItem bg="red">
                  <Center p="2" height="99px">
                    Content
                  </Center>
                </GridItem>
                <GridItem bg="#ff9f00">
                  <Center p="2" height="99px">
                    Widget
                  </Center>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </div>
  );
};
