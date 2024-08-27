import { z } from 'zod'

// somente informações do projeto que são importantes para a parte de permissionamento
export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
