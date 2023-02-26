import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

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
            </Container>
        </Layout>
    )
}

export default Work