import React from "react";
import {Button, Flex} from "@chakra-ui/react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    isLastPage: boolean
    onPrev: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, onPrev, onNext, isLastPage}) => {
    return (
        <Flex justify="end" gap={4} pr={4} flexWrap="wrap" align="center" mt={{base: 0, lg: 8}}>
            <Button disabled={currentPage === 1} onClick={onPrev} variant="outline" size="sm">
                <FaChevronLeft/>Previous
            </Button>

            <Button disabled={isLastPage} onClick={onNext}
                    variant="outline" size="sm">
                Next<FaChevronRight/>
            </Button>
        </Flex>
    );
};

export default Pagination;
