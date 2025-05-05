import React from "react";
import {Button} from "@chakra-ui/react";
import {IoArrowBackCircleOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useColorModeValue} from "@/components/ui/color-mode";

const GoToBackButton: React.FC = () => {
    const navigate = useNavigate();
    const modeColor = useColorModeValue("gray.900", "gray.200");

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <Button onClick={handleGoBack} colorScheme="teal" bgColor={modeColor} size="sm">
            <IoArrowBackCircleOutline/> Go Back
        </Button>
    );
};

export default GoToBackButton;
