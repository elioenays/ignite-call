import { Heading, Text } from '@ignite-ui/react'
import { Hero, HomeContainer, Preview } from './styles'

import previewImg from '@/assets/app-preview.png'
import Image from 'next/image'
import ClaimUsernameForm from './ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title='Descomplique sua agenda | Ignite Call'
        description='Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.'
      />
      <HomeContainer>
        <Hero>
          <Heading
            as='h1'
            size='4xl'
          >
            Agendament descomplicado
          </Heading>
          <Text size='lg'>
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImg}
            height={400}
            quality={100}
            priority
            alt='calendário simbolizando aplicação em funcionamento'
          />
        </Preview>
      </HomeContainer>
    </>
  )
}
