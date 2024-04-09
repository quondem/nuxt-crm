<template>
	<section class="grid grid-cols-[1fr,6fr] min-h-screen">
		<LayoutSidebar />
		<div>
			<slot />
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
