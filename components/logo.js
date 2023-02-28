import Link from 'next/link'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

> img {
    transition: 200ms ease;
}

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    return (
        (<Link href="/" scroll={false}>
            
            <LogoBox>
                <Image src={ useColorModeValue( '/hat.png', '/hat_white.png')} width={5} height={5} />
                <Text 
                    color={useColorModeValue('gray.800', 'white.900')}
                    fontFamily="Jua, sans-serif"
                    fontWeight="bold"
                    ml={3}
                >
                    Michael Comatas
                </Text>
            </LogoBox>

        </Link>)
    );
}

export default Logo

