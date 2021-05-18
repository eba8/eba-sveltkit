<script>
    import { page } from '$app/stores';
    let mobile_menu = false;
</script>

<nav class="bg-white shadow position: fixed w-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex md:justify-center h-16">
        <div class="flex">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <ul class="flex flex-row space-x-4 items-center">
                <a sveltekit:prefetch href="/"><li class="px-5 py-1 border border-gray-900 rounded-md focus:outline-none hover:bg-gray-900 hover:text-white" class:active={$page.path === '/'}>Home</li></a>
                <a sveltekit:prefetch href="/projects"><li class="px-5 py-1 border border-gray-900 rounded-md focus:outline-none hover:bg-gray-900 hover:text-white" class:active={$page.path === '/projects'}>Projects</li></a>
                <a sveltekit:prefetch href="/investments"><li class="px-5 py-1 border border-gray-900 rounded-md focus:outline-none hover:bg-gray-900 hover:text-white" class:active={$page.path === '/investments'}>Investments</li></a>
            </ul>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.
  
              Heroicon name: outline/menu
  
              Menu open: "hidden", Menu closed: "block"
            -->
            <button on:click={()=>{ mobile_menu = !mobile_menu }}><svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg></button>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    {#if mobile_menu }
      <div class="pt-2 pb-3 space-y-1">
        <li class="bg-gray-50 border-gray-500 text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" class:active={$page.path === '/'}><a on:click = {()=>{mobile_menu = !mobile_menu}} sveltekit:prefetch href="/">Home</a></li>

        <li class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" class:active={$page.path === '/projects'}><a on:click = {()=>{mobile_menu = !mobile_menu}} sveltekit:prefetch href="/projects">Projects</a></li>

        <li class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" class:active={$page.path === '/investments'}><a on:click = {()=>{mobile_menu = !mobile_menu}} sveltekit:prefetch href="/investments">Investments</a></li>    
      </div>
    {/if}
  </nav>