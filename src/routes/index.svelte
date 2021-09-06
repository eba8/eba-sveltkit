<script>
	import Subscribe from '../lib/Subscribe.svelte';
	import Investments from '../lib/Investments.svelte';

	let subscribe = false;
	let investments = false;
	let nav = true;
	let back = false;

	function navDisplay() {
		nav = !nav;
		back = !back;
	}
</script>

<svelte:head>
	<title>Edan Ben-Atar</title>
</svelte:head>

<div class="min-h-screen bg-center bg-no-repeat bg-auto">
	<div class="p-2 lg:py-10">
		<div
			class="m-auto overflow-hidden rounded-lg shadow-md bg-black md:rounded-3xl xl:w-5/12 sm:w-10/12 md:w-6/12"
		>
			<div class="pt-10 pb-10 md:pt-20 md:px-10 sm:px-5">
				<img src="/edan-ben-atar.jpg" alt="" class="w-40 h-40 m-auto rounded-full" />
				<h2 class="py-6 text-4xl font-bold text-center text-white md:text-6xl">Edan Ben-Atar</h2>
				<p class="p-2 text-center text-white md:text-xl sm:text-lg md:pt-5">
					On an a life long journey of learning. I live in Maryland with my partner in crime, our
					two boys and furball.
				</p>
			</div>

			<div class="px-5 py-5 bg-white md:px-10 md:py-16">
				<div>
					{#if back}
						<button
							on:click={() => {
								if (subscribe || investments) {
									subscribe = false;
									investments = false;
								}
								navDisplay();
							}}
							class="border-gray-300 hover:border-gray-500 border px-2 rounded-md">Back</button
						>
					{/if}
				</div>
				{#if nav}
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1">
						<div>
							<a
								href="https://twitter.com/edanbenatar"
								class="flex justify-between px-5 py-2 text-gray-800 transition-all border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500"
							>
								<span class="font-bold text-md">Twitter</span>
								<svg id="" viewBox="0 0 40 40" class="w-7 h-7">
									<path
										fill="currentColor"
										d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z"
									/>
								</svg>
							</a>
						</div>
						<div>
							<button
								on:click={() => {
									subscribe = !subscribe;
									navDisplay();
								}}
								class="flex justify-between px-5 py-2 text-gray-800 transition-all border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500"
							>
								<span class="font-bold text-md">Subscribe</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</button>
						</div>

						<div>
							<a
								href="https://weblime.com"
								class="flex justify-between px-5 py-2 text-gray-800 transition-all border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500"
							>
								<span class="font-bold text-md">WebLime</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/>
								</svg>
							</a>
						</div>
						<div>
							<a
								href="https://tailmars.com"
								class="flex justify-between px-5 py-2 text-gray-800 transition-all border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500"
							>
								<span class="font-bold text-md">Tailmars</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/>
								</svg>
							</a>
						</div>
						<div>
							<a
								href="https://digitalatar.com"
								class="flex justify-between px-5 py-2 text-gray-800 transition-all border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500"
							>
								<span class="font-bold text-md">DigitalAtar</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/>
								</svg>
							</a>
						</div>
						<div>
							<button
								on:click={() => {
									investments = !investments;
									navDisplay();
								}}
								class="flex justify-between px-5 py-2 text-gray-800 transition-all border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500"
							>
								<span class="font-bold text-md">Investments</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				{/if}

				{#if subscribe}
					<Subscribe />
				{/if}

				{#if investments}
					<Investments />
				{/if}
			</div>
		</div>
	</div>
</div>
