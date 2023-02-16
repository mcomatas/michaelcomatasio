import Link from 'next/link'
import Image from 'next/imgage'
import { Text, useColorModeValue } from '@chakra-ui/react'
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
    const meImg = `/meRound.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={meImg} width={20} height={20} alt="logo" />
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo

