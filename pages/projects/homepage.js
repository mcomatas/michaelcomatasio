import { Container, Badge, Link, List, ListItem, Button, Box } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => {
    return (
        <Layout title="Homepage">
            <Container>
                <Title>Michael Comatas - Homepage <Badge colorScheme="purple">2023</Badge></Title>
                <P>
                    A simple web application to serve as a online portfolio for myself.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://michaelcomatas.io" target="_blank">
                            https://michaelcomatas.io <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        Web
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        NextJS / Chakra UI
                    </ListItem>
                </List>

                I have included page transitions, light and dark themes, and a responsive design.
                <WorkImage src={'/homepage.png'} alt="homepage" borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" />

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