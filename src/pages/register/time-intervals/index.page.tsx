import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as='strong'>Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep
          size={4}
          currentStep={3}
        />
      </Header>

      <IntervalBox as='form'>
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feita</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size='sm'
                type='time'
                step={60}
                crossOrigin=''
              />
              <TextInput
                size='sm'
                type='time'
                step={60}
                crossOrigin=''
              />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feita</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size='sm'
                type='time'
                step={60}
                crossOrigin=''
              />
              <TextInput
                size='sm'
                type='time'
                step={60}
                crossOrigin=''
              />
            </IntervalInputs>
          </IntervalItem>
        </IntervalsContainer>
        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
