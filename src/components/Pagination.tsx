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
            <Button disabled={currentPage === 1} onClick={onPrev} variant="outline" size="sm">
                <FaChevronLeft/> Previous
            </Button>
            <Button disabled={currentPage === totalPages || totalPages === 0} onClick={onNext}
                    variant="outline" size="sm">
                Next <FaChevronRight/>
            </Button>
        </Flex>
    );
};

export default Pagination;
