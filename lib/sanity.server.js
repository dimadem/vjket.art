import { createClient } from "next-sanity";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2021-10-21";
// const token = process.env.SANITY_API_READ_TOKEN;
const dataset = "production";
const projectId = "1mlfw8e7";
const token =
  "skaDtbUvoAGUtncygj2wsc3zf9Mk3X1wTtHuTOOxGGVpiR709GJAUt4yJbWq2FwWqJmmtQBErXw7QCyexLNYfXv1NBf2vvY5G2zkIP5tpH3LWABl8Zr6sLdAB9faFVMynkywWJlwXKzGk46YiDutcOl46gmI65xcyyDD131MvZT6OEYvacod";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true,
});
