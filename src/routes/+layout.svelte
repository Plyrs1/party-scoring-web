<script lang="ts">
  import '$lib/main.css'

  import Navbar from '$lib/components/Navbar.svelte'
</script>

<div class="grid grid-cols-[auto,1fr] min-h-screen gap-6 p-6">
  <Navbar />
  <slot />
</div>
