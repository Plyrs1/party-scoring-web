<script lang="ts">
  import Fa from 'svelte-fa'
  import { faComment, faFileCirclePlus, faHome, faUser, faListOl, faRankingStar, faGear } from '@fortawesome/free-solid-svg-icons'
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

  type NavLink = {
    name: string
    href: string
    icon: IconDefinition
  }

  const navLinks: NavLink[] = [
    {
      name: 'Home',
      href: '/',
      icon: faHome
    },
    {
      name: 'Songlist',
      href: '/songlist',
      icon: faListOl
    },
    {
      name: 'Ranking',
      href: '/ranking',
      icon: faRankingStar
    },
    {
      name: 'New Party',
      href: '/new-party',
      icon: faFileCirclePlus
    },
    {
      name: 'Comment',
      href: '/comment',
      icon: faComment
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: faGear
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: faUser
    }
  ]
</script>

<header class="widget p-6 text-black h-full">
  <nav class="flex gap-6 flex-col [&>a:last-child]:mt-auto h-full items-center">
    {#each navLinks as { href, icon }}
      <a class="text-3xl text-party-orange" {href}>
        <Fa {icon} />
      </a>
    {/each}
  </nav>
</header>
