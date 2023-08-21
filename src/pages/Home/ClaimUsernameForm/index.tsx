import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({ username: z.string() })

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export default function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {}

  return (
    <Form
      as='form'
      onSubmit={handleSubmit(handleClaimUsername)}
    >
      <TextInput
        size='sm'
        prefix='ignite.com/'
        placeholder='seu usuário'
        crossOrigin=''
        {...register('username')}
      />
      <Button>
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
