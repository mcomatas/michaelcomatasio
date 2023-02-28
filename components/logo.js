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

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    //const meImg = '/meRound.png'
    //<Image src={meImg} width={20} height={20} alt="logo" />

    return (
        (<Link href="/" scroll={false}>
            
            <LogoBox>
                {/*<Image src="/meRound.png" width={5} height={5} />*/}
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

