import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOthersUsers = ability.can('delete', 'User')

const userCannotInviteSomeoneElse = ability.cannot('invite', 'User')

console.log(
  userCanInviteSomeoneElse,
  userCanDeleteOthersUsers,
  userCannotInviteSomeoneElse,
)
