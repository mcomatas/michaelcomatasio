import { Container, Box, Heading, SimpleGrid, useColorModeValue, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="slippiwincalculator" title="Slippi Win Calculator" thumbnail={'/slippi.png'}>
                        A program to give in depth win percentages of a players Slippi account.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="toadbot" title="Toad Bot" thumbnail={'/discord.png'}>
                        A discord bot to provide functionality in a server with my friends and I.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works