import { z } from 'zod'

// somente informações do projeto que são importantes para a parte de permissionamento
export const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'),
  id: z.string(),
  ownerId: z.string(),
})

export type Project = z.infer<typeof projectSchema>
