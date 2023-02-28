import NextLink from 'next/link'
import { Image, Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

const WorkBox = styled.span`
    
    > img {
        transition: 300ms ease;
    }

    > p {
        transition: 300ms ease;
    }

    &:hover img {
        box-shadow: 10px 5px 5px black;
        transform: translate( 0, -0.5em );
    }

    &:hover p {
        transform: translate( 0, -0.5em );
    }
`

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image 
                src={thumbnail} 
                alt={title} 
                className="grid-item-thumbnail" 
                placeholder="blur" 
                loading="lazy" 
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text> 
        </LinkBox>
    </Box>
)

/*export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <WorkBox>    
        <Box rounded='lg'
            w="100%" 
            textAlign="center"
            _hover={{
                transform: 'translate( 0, -0.5em)'
            }}
        >
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor="pointer">
                    <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" style={{ borderRadius: 12 }}
                        _hover={{
                            transform: 'translate( 0 -1em )'
                        }} />
                    <LinkOverlay href={`/works/${id}`}>
                        <Text mt={2} fontSize={20}>{title}</Text>
                    </LinkOverlay>
                    <Text fontSize={14} _hover={{fontSize: 200}}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    </WorkBox>
)*/

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
        <Box 
            w="100%" 
            textAlign="center"
            rounded="lg"
        >
            <LinkBox
                as={NextLink}
                href={`/projects/${id}`}
                scroll={false}
                cursor="pointer"
            >
                <WorkBox>
                    <Image 
                        src={thumbnail}
                        alt={title}
                        className="grid-item-thumbnail"
                        placeholder="blur"
                        style={{ borderRadius: 12 }}
                    />
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                    <LinkOverlay as="div" href={`/projects/${id}`}></LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </WorkBox>
            </LinkBox>
        </Box>
)

export const GridItemStyle = () => (
    <Global 
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)