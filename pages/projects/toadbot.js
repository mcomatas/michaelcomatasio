import { Container, Badge, Link, List, ListItem, Box, Button } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => {
    return (
        <Layout title="ToadBot">
            <Container>
                <Title>
                    ToadBot <Badge colorScheme="purple">2022</Badge>
                </Title>
                <P>
                    A discord bot to add extra functionality for a discord server with my friends and myself.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/mcomatas/ToadBot">
                            https://github.com/mcomatas/ToadBot
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <Link href="https://discord.com/">
                            Discord
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        NodeJS
                    </ListItem>
                </List>

                The bot has a multitude of commands, some including
                subcommands which the bot can respond to:
                <WorkImage src={'/toadbot/example1.png'} alt="example" />
                In addition the bot uses a database to keep record of each
                server members currency and number of items they have:
                <WorkImage src={'/toadbot/example2.png'} alt="example" />

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