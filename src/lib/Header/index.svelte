<script>
    import { page } from '$app/stores';
</script>

<div class="flex pb-5 space-x-5">
    <nav>
        <ul class="flex flex-row space-x-4">
            <li class="px-5 py-1 border border-gray-900 rounded-md focus:outline-none hover:bg-gray-900 hover:text-white" class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
            <a sveltekit:prefetch href="/about"><li class="px-5 py-1 border border-gray-900 rounded-md focus:outline-none hover:bg-gray-900 hover:text-white" class:active={$page.path === '/about'}>About</li></a>
        </ul>
    </nav>
</div>