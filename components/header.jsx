import Link from 'next/link'
import { LinkedinIcon, GithubIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <Avatar>
        <AvatarFallback>GL</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-semibold tracking-tight mt-3">
        Gerardo Luna
      </h1>
      <Link
        href="https://github.com/morelzy"
        className="text-sm xl:text-base text-zinc-500 hover:text-zinc-600 transition"
        target="_blank"
      >
        @morelzy
      </Link>

      <p className="text-center max-w-md mt-3 mb-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam
        ipsa facilis dignissimos nulla
      </p>

      <div className="flex gap-x-2 mt-3">
        <div className="bg-zinc-800 p-2 rounded-full">
          <GithubIcon className="h-5 w-5" />
        </div>
        <div className="bg-zinc-800 p-2 rounded-full">
          <LinkedinIcon className="h-5 w-5" />
        </div>
      </div>

      <Button className="mt-3">Projects</Button>
    </header>
  )
}
