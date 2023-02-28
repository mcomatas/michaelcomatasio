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
                    <WorkGridItem id="slippiwincalculator" title="Slippi Win Calculator" thumbnail={'/slippi.jpg'}>
                        A program to give in depth win percentages of a players Slippi account.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="homepage" title="My Homepage" thumbnail={'/profile.png'}>
                        A homepage to serve as a digital resume for myself.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="basementboys" title="Basement Boys" thumbnail={'/bbthumb.jpg'} >
                        A full stack application to act as an online portfolio for my friends and I Super Smash Bros. Melee combos.    
                    </WorkGridItem>    
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works