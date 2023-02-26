import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Slippi Win Calculator">
            <Container>
                <Title>
                    Slippi Win Calculator <Badge colorScheme="purple">2022</Badge>
                </Title>
                <P>
                    A program to give a user in depth win percentages of their <Link href="https://slippi.gg/" target="_blank">Slippi</Link> data.        
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/mcomatas/Slippi-Win-Calculator" target="_blank">
                        https://github.com/mcomatas/Slippi-Win-Calculator <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows / macOS / Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        NodeJS
                    </ListItem>
                </List>

                If the user wanted to see their win percentage across all games against all 
                opponents and against all characters the user could use the application 
                like this:
                <WorkImage src={'/slippi/example1.png'} alt="example" />
                But if the user wanted to see a more specific matchup against a specific 
                opponent with a character of their choice the use could use the application 
                like this:
                <WorkImage src={'/slippi/example2.png'} alt="example" />
                Once the application is finished running it gives an output like this for 
                every character in the game:
                <WorkImage src={'/slippi/example3.png'} alt="example" />
                In addition it also gives the output of total wins, total games, and overall win percantage:
                <WorkImage src={'/slippi/example4.png'} alt="example" />
                In version 1.6.0 the user is prompted if they want to write a CSV file of the data, this way 
                they can import it for better visiualization of the data:
                <WorkImage src={'/slippi/example5.png'} alt="example" />
                How the data looks once it is imported from the CSV file into a Google sheets document:
                <WorkImage src={'/slippi/example6.png'} alt="example" />

            </Container>
        </Layout>
    )
}

export default Work