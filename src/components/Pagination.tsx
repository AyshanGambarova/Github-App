import React from "react";
import {Button, Flex} from "@chakra-ui/react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {TResRepos} from "@/types/apis/user";

interface PaginationProps {
    dataUserRepositories?: TResRepos[];
    currentPage?: number;
    onPrev: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, onPrev, onNext, dataUserRepositories}) => {
    return (

        <Flex justify="end" gap={4} flexWrap="wrap" align="center">
            <Button disabled={currentPage === 1} onClick={onPrev} variant="outline" size="sm">
                <FaChevronLeft/>Previous
            </Button>

            <Button disabled={dataUserRepositories?.length === 0} onClick={onNext}
                    variant="outline" size="sm">
                Next<FaChevronRight/>
            </Button>
        </Flex>
    );
};

export default Pagination;
