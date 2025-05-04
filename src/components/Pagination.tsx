import React from "react";
import {Button, Flex, IconButton, Text} from "@chakra-ui/react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPrev, onNext}) => {
    return (

        <Flex justify="end" gap={4} flexWrap="wrap" align="center">
            <IconButton disabled={currentPage === 1} onClick={onPrev} variant="plain" size="xs">
                <FaChevronLeft/>
            </IconButton>
            <Text fontSize="sm">
                Page {currentPage} of {totalPages}
            </Text>
            <IconButton disabled={currentPage === totalPages || totalPages === 0} onClick={onNext}
                        variant="plain" size="xs">
                <FaChevronRight/>
            </IconButton>
        </Flex>
    );
};

export default Pagination;
