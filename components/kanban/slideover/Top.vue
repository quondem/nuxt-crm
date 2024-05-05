<template>
	<div class="border-border bg-black/20 rounded p-3">
		<div class="uppercase bold text-xl mb-4">о сделке</div>
		<KanbanSlideoverLabel label-text="Наименование">
			<h2>
				{{ store.card?.name }}
			</h2>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Сумма">
			{{ convertCurrency(store.card?.price || 0) }}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Статус">
			<UiBadge variant="outline">
				{{ KanbanStatusMap[store.card?.status ?? "no-status"] }}
			</UiBadge>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Клиент">
			{{ store.card?.companyName }}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Дата создания">
			{{ dayjs(store.card?.$createdAt).format("DD MM YYYY") }}
		</KanbanSlideoverLabel>
	</div>
</template>

<script setup lang="ts">
	import dayjs from "dayjs";
	import { KanbanStatusMap } from "../kanbanStatus.map";

	const store = useDealSlideStore();
</script>
