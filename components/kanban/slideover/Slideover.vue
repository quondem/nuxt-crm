<template>
	<div>
		<USlideover v-model="isLocalOpen">
			<UCard
				class="flex flex-col flex-1 overflow-y-auto"
				:ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-border' }">
				<template #header>
					<KanbanSlideoverTop />
				</template>

				<KanbanSlideoverComments />
			</UCard>
		</USlideover>
	</div>
</template>

<script setup lang="ts">
	const store = useDealSlideStore();

	const isLocalOpen = computed({
		get: () => store.isOpen,
		set: (value: boolean) => {
			store.isOpen = value;
		},
	});
</script>
