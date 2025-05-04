import React from "react";
import {Box, Flex, Grid} from "@chakra-ui/react";
import GoToBackButton from "@/components/GoToBackButton";
import ColorModeButton from "@/components/ColorModeButton";
import {Outlet, useLocation} from "react-router-dom";

const Layout: React.FC = () => {
    const location = useLocation();
    const isNotIndex = location.pathname !== "/";

    return (
        <Grid h="100vh" templateRows="90px 1fr">
            <Flex justifyContent="space-between" align="center" px={5} py={4}>
                {isNotIndex ? <GoToBackButton/> : <Box w="40px"/>}
                <ColorModeButton/>
            </Flex>
            <Box>
                <Outlet/>
            </Box>
        </Grid>
    );
};

export default Layout;
