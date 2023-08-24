import React from 'react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa de mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export default function ConfirmStep() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  async function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm
      as='form'
      onSubmit={handleSubmit(handleConfirmScheduling)}
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
          {...register('name')}
        />
        {errors.name && <FormError size='sm'>{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size='sm'>Endereço de e-mail</Text>
        <TextInput
          placeholder='jhondoe@example.com'
          type='email'
          crossOrigin=''
          {...register('email')}
        />
        {errors.email && (
          <FormError size='sm'>{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size='sm'>Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button
          type='button'
          variant='tertiary'
        >
          Cancelar
        </Button>
        <Button
          type='submit'
          disabled={isSubmitting}
        >
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
