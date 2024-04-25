import { APP_WRITE_ID, COLLECTION_DEALS, DB_ID } from "@/app.constants";
import { Account, Client, Databases, Storage } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(APP_WRITE_ID);

export const account = new Account(client);
export { ID } from "appwrite";
export const DB = new Databases(client);
export const storage = new Storage(client);

console.log(DB);

const promise = DB.listDocuments(DB_ID, COLLECTION_DEALS);

promise.then(
	function (response) {
		console.log(response, 1); // Success
	},
	function (error) {
		console.log(error); // Failure
	}
);
