import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";
import { KANBAN_DATA } from "./kanban.data";
import type { IDeal } from "~/types/deals.types";
import { Query } from "appwrite";

export function useKanbanQuery() {
	// Kanban queries
	return useQuery({
		queryKey: ["deals"],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			const newBoard = [...KANBAN_DATA];
			let res = async () => {
				let r = await DB.listDocuments(DB_ID, COLLECTION_DEALS);
				console.log(r, 1);
			};
			res();
			const deals = data.documents as unknown as IDeal;
			console.log(deals);
			console.log(data);
		},
	});
}
