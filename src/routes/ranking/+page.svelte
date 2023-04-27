<script lang="ts">
  import Fa from 'svelte-fa'
  import VideoPlayer from '$lib/components/VideoPlayer.svelte'
  import { faStar } from '@fortawesome/free-regular-svg-icons'
  import { faStar as FaSolidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

  let currentStars = 0
  let hoveredStars = 0

  let isHovering = false
  let isFinalHovering = false

  const TEN_STARS = [...Array(10).keys()]

  function rateSong(star: number) {
    return (): void => {
      if (currentStars === star) {
        const isHalf = currentStars % 1 === 0.5

        const newCurrentStars = currentStars - (isHalf ? 0.5 : 1)

        currentStars = newCurrentStars === 0.5 ? 0 : newCurrentStars

        return
      }

      currentStars = star
    }
  }

  function hoverStar(star: number) {
    return (): void => {
      hoveredStars = star

      isHovering = true
      isFinalHovering = true
    }
  }

  function resetHover(star: number) {
    return (): void => {
      setTimeout(() => {
        if (isHovering || star !== hoveredStars) return

        hoveredStars = currentStars

        isFinalHovering = false
      }, 500)

      if (star !== hoveredStars) return

      isHovering = false
    }
  }
</script>

<main class="rounded-xl grid gap-6">
  <div class="grid grid-rows-[1fr,auto]  overflow-hidden widget">
    <VideoPlayer title="Yotogibanashi" artist="KanoeRana" subtitle="Kyokou Suiri Season 2 - OP1" songLink="#" />
    <div class="p-6 gap-2 rounded-t-none flex justify-center">
      {#each TEN_STARS as star}
        {@const isSolid = hoveredStars >= star}
        {@const isHalf = hoveredStars === star - 0.5}
        <div class="relative grid items-center clickable">
          <button
            class="absolute outline-none w-8 h-full"
            on:click={rateSong(star - 0.5)}
            on:mouseenter={hoverStar(star - 0.5)}
            on:mouseleave={resetHover(star - 0.5)}
          />
          <Fa class="text-5xl text-party-orange" icon={isSolid ? FaSolidStar : isHalf ? faStarHalfStroke : faStar} />
          <button
            class="absolute outline-none w-8 h-full right-0"
            on:click={rateSong(star)}
            on:mouseenter={hoverStar(star)}
            on:mouseleave={resetHover(star)}
          />
        </div>
      {/each}
    </div>
  </div>
</main>
