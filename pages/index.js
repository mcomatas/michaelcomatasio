import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('purple.100', 'whiteAlpha.300')} p={2} mb={6} align="center">
                Hello, I'm a Software Engineer based in USA!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michael Comatas
                    </Heading>
                    <p>Just a guy trying to do something.</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page