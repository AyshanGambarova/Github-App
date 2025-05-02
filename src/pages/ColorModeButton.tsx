import React from "react";
import {Flex, IconButton} from "@chakra-ui/react";
import {LuMoon, LuSun} from "react-icons/lu";
import {useColorMode} from "@/components/ui/color-mode";


const ColorModeButton: React.FC = () => {
    const {toggleColorMode, colorMode} = useColorMode()
    return (
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === "light" ? <LuSun/> : <LuMoon/>}
        </IconButton>
    );
};

export default ColorModeButton;
