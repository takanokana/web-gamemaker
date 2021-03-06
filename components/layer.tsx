import { VFC, ReactNode } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

type LayerType = {
  meta: {
    title: string
  },
  children: ReactNode
}

export const Layer: VFC<LayerType> = ({ meta, children }) => (
  <>
    <Head>
      <title>{meta.title} | GameMaker Studio2 JP Club</title>
      <meta name="description" content={`GameMaker Studio2の日本語情報を発信するサイトの${meta.title}ぺージです。`} />
    </Head>
    <Box px={10} py={10} minH="95vh">
      <Header />
      <ContainerCss maxW="container.lg" as='main'>
        {children}
      </ContainerCss>
    </Box>
    <Footer />
  </>
)

const ContainerCss = styled(Container)`
  & h1 {
    font-size: 23px;
    font-weight: bold;
  }
  @media only screen and (min-width: 768px) {
    & h1 {
      padding:30px 0;
      font-size: 30px;
    }
  }
  & h2 {
    font-size: 18px;
    font-weight: bold;
    padding-top: 20px;
  }
  @media only screen and (min-width: 768px) {
    & h2 {
      font-size: 23px;
      padding-top: 30px;
    }
  }
  & p {
    padding-top: 30px;
    line-height: 1.8;
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    & p {
      font-size: 16px;
    }
  }

  & a {
    color: #4783fc;
    &:hover {
      border-bottom: 1px solid #4783fc;
    }
  }
  & h1 + * {
    padding-top: 0;
  }
  & h2 + * {
    padding-top: 10px;
  }
`