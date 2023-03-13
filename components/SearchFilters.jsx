import { useState, useEffect } from "react";
import { Flex, Spinner, Select, Box, Text, Input, Icon, Button } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md"
import Image from "next/image";
import { filterData, getFilterValues } from "@/utils/filterData";


const SearchFilters = () => {

    
    const [filters, setFilters] = useState(filterData)

    const selectProperties = (filterValues)=> {
        const path = router.pathname
        const { query } = router

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]){
                query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query })
    }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center">
            {filters.map((filter) => (
                <Box key={filter.queryName} >
                    <Select
                        w="fit-content"
                        p="2"
                        placeholder={filter.placeholder}
                        onChange={(e) => selectProperties( {[filter.queryName] : e.target.value} )}
                    >
                        {filter?.items?.map ((item) => (
                            <option name={filter.name} key={filter.value} >
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters