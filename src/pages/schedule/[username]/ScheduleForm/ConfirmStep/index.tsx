import React from 'react'
import CalendarStep from '../CalendarStep'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'

export default function ConfirmStep() {
  async function handleConfirmScheduling() {}

  return (
    <ConfirmForm
      as='form'
      onSubmit={handleConfirmScheduling}
    >
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de setembro de 2023
        </Text>
        <Text>
          <Clock />
          15:00h
        </Text>
      </FormHeader>
      <label>
        <Text size='sm'>Nome completo</Text>
        <TextInput
          placeholder='Seu nome'
          crossOrigin=''
        />
      </label>

      <label>
        <Text size='sm'>Endereço de e-mail</Text>
        <TextInput
          placeholder='jhondoe@example.com'
          type='email'
          crossOrigin=''
        />
      </label>

      <label>
        <Text size='sm'>Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button
          type='button'
          variant='tertiary'
        >
          Cancelar
        </Button>
        <Button type='submit'>Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
