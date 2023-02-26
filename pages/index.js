import { Container, Box, Heading, useColorModeValue, Image, Button, List, ListItem, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
//import Image from 'next/image'

const Page = () => {
//    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/public/meRound.png" alt="Profile Image" />

    return (
        <Layout>
            <Container p={1}>
                <Box borderRadius="lg" bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.300')} p={2} mb={6} align="center">
                    Computer Science @ Rutgers University
                    <br />
                    Optics System Engineer @ Nokia
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Michael Comatas
                        </Heading>
                        <p>Software Engineer</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="150px" display="inline-block" borderRadius="full" src="/meRound.png" alt="Profile Image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work + Education
                    </Heading>
                    <Paragraph>
                        I studied Computer Science, Math, and Psychology at Rutgers University. I'm currently at Nokia
                        as an optics system engineer where I help build fiber optic systems as well as helping with 
                        automation of tests cases for those systems.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1999</BioYear>
                        Born in New Jersey, USA.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Graduated from Rutgers University with a Bachelor's of Science in Computer Science and Psychology, with a Minor in Mathematics.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Working as an Optics System Engineer for Nokia Bell Labs
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I enjoy
                    </Heading>
                    <Paragraph>
                        Super Mario 64 speedrunnning, competetive Super Smash Bros. Melee, lifting weights, and making videos.
                    </Paragraph>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Find me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/mcomatas" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoGithub />}>@mcomatas</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page