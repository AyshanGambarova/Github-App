import React from "react";
import {Button} from "@chakra-ui/react";
import {IoArrowBackCircleOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const GoToBackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <Button onClick={handleGoBack} colorScheme="teal" bgColor="gray.700">
            <IoArrowBackCircleOutline/> Go Back
        </Button>
    );
};

export default GoToBackButton;