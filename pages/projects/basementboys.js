import { Container, Badge, Link, List, ListItem, Box, Button } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => {
    return (
        <Layout title="Basement Boys">
            <Container>

                <Title>Basement Boys <Badge colorScheme="purple">2023</Badge></Title>
                <P>
                    A full stack application that showcases my friends and I melee combos videos. Each player has a section designated for their main character plus
                    a collection of combos that opens up as a modal.
                </P>
                <List my={4} ml={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://basementboys.netlify.app">
                            https://basementboys.netlify.app <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        Web
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        Vuejs / Firebase
                    </ListItem>
                </List>

                There are 4 sections total, each section looks like this with the player heading and a gif of their main character to the right.
                <WorkImage src={'/basementboys/example1.png'} alt="example1" />
                When the combo button is clicked, the modal opens for that designated player and the user can navigate through the gifs with the "previous" and "next" buttons.
                <WorkImage src={'/basementboys/example2.png'} alt="example2" />

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