import React from 'react'
import { Container, UserHeader } from './styles'
import { Avatar, Heading, Text } from '@ignite-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prisma } from '@/lib/prisma'

interface ScheduleProps {
  user: { name: string; bio: string; avatarUrl: string }
}

export default function Schedule({
  user: { avatarUrl, bio, name },
}: ScheduleProps) {
  return (
    <Container>
      <UserHeader>
        <Avatar src={avatarUrl} />
        <Heading>{name}</Heading>
        <Text>{bio}</Text>
      </UserHeader>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({ where: { username } })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: { name: user.name, bio: user.bio, avatarUrl: user.avatar_url },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}