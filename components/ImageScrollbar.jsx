import { useContext } from "react";
import Image from "next/image";
import { Box, Flex, Icon } from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Flex justifyContent="center" alignItems="center"  >
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={()=>scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Flex justifyContent="center" alignItems="center"  >
            <Icon
                as={FaArrowAltCircleRight}
                onClick={()=>scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {data.map((item)=>(
            <Box width="910px" itemID={item.id} overflow="hidden" key={item.id}  >
                <Image 
                    alt="property"
                    placeholder="blur"
                    blurDataURL={item.url}
                    src={item.url}
                    width={1000}
                    height={500}
                    sizes="(max-width:500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollbar