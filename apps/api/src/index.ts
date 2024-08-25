import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOthersUsers = ability.can('delete', 'User')

const userCannotInviteSomeoneElse = ability.cannot('invite', 'User')

console.log(
  userCanInviteSomeoneElse,
  userCanDeleteOthersUsers,
  userCannotInviteSomeoneElse,
)
