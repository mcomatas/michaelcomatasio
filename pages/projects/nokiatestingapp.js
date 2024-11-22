import { Container, Badge, Link, List, ListItem, Box, Button } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => {
    return (
        <Layout title="Nokia Testing App">
            <Container>
                <Title>
                    Nokia Testing App <Badge colorScheme="purple">2024</Badge>
                </Title>
                <P>
                    A desktop application to improve testing at Nokia and combine multiple components into one.
                    The app is still in its alpha stage.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/mcomatas/NokiaTestingApp" target="_blank">
                        https://github.com/mcomatas/NokiaTestingApp <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        Next.js / Electron / XTerm.js / Socket.io / ssh2 / Express.js / ChakraUI
                    </ListItem>
                </List>

                The user can add as many terminals and web pages as they would like to their display.
                Each terminal has ssh capability.
                <WorkImage src={'/nokia/example1.png'} alt="example" />

                <Box align="center">
                    <NextLink href="/projects">
                        <Button colorScheme="purple" leftIcon={<ChevronLeftIcon />}>
                            Back to projects
                        </Button>
                    </NextLink>
                </Box> 

            </Container>
        </Layout>
    )
}

export default Work