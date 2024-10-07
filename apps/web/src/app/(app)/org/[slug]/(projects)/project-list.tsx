import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 01</CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut at,
            suscipit inventore quaerat vel perspiciatis, necessitatibus eum
            deserunt quasi ad laborum, qui totam unde ex dignissimos maiores
            temporibus sit.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://github.com/brunaporato.png" />
            <AvatarFallback />
          </Avatar>

          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Bruna Porato</span> a
            day ago
          </span>

          <Button className="ml-auto" size="xs" variant="outline">
            View <ArrowRight className="ml-2 size-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
