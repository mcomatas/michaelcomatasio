import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    withDefaultColorScheme
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ( { href, path, target, children, ...props } ) => {
    const active = path === href
    const inactiveColor = useColorModeValue( 'gray.800', 'white.900' )
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={ active ? 'purple.400' : undefined }
            color={ active ? '#202023' : inactiveColor }
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef(( props, ref ) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const path = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={2}
            {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg">
                        <Logo />
                    </Heading>
                </Flex>

                <Stack 
                    direction={{ base: 'column', md: 'row' }} 
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon/>} 
                                variant="outline" 
                                aria-label="Options" 
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    About
                                </MenuItem>
                                <MenuItem as={MenuLink} href="projects">
                                    Projects
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}

export default Navbar
