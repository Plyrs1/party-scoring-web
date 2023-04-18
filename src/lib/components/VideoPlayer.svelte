<script lang="ts">
  import Fa from 'svelte-fa'
  import { faCirclePlay, faCirclePause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

  export let title: string
  export let artist: string
  export let subtitle: string
  export let songLink: string

  let isPlaying = false

  function togglePlay(): void {
    isPlaying = !isPlaying
  }
</script>

<section class="rounded-party-radius w-full h-full bg-black grid gap-4 text-white p-8 content-between">
  <div class="grid gap-2 justify-items-start">
    <h1 class="text-2xl">
      {title} by
      <a href={songLink} class="underline" target="_blank">{artist}</a>
    </h1>
    <p class="text-lg text-gray-200">{subtitle}</p>
  </div>
  <div class="flex gap-12 justify-center mb-4">
    <button>
      <Fa class="text-6xl" icon={faChevronLeft} />
    </button>
    <button on:click={togglePlay}>
      <Fa class="text-6xl" icon={isPlaying ? faCirclePause : faCirclePlay} />
    </button>
    <button>
      <Fa class="text-6xl" icon={faChevronRight} />
    </button>
  </div>
</section>
