import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: true,
  apiVersion: "2021-10-21",
});
