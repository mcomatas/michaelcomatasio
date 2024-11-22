import { Container, Box, Heading, SimpleGrid, useColorModeValue, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout title="Projects">
            <Container>
                
                <Heading as="h3" fontSize={20} mb={4}>
                    Current Projects
                </Heading>

                <SimpleGrid columns={[1,1,1]} gap={6}>
                    <Section>
                        <WorkGridItem id="nokiatestingapp" title="Nokia Testing App" thumbnail={'/nokia.jpeg'}>
                            A desktop application to help improve testing at Nokia.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                
                <Divider my={6}/>

                <Heading as="h3" fontSize={20} mb={4}>
                    Past Projects
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
                    <Section>
                        <WorkGridItem id="toadbot" title="ToadBot" thumbnail={'/discord.png'} >
                            A discord bot to add some functionality for a serve with friends and myself.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works