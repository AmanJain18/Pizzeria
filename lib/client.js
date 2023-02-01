import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "xp6y03uu",
  dataset: "production",
  apiVersion: "2022-12-08",
  useCdn: "true",
  token:
    "skU4kvxD7zZYkHbsczlWJWGCbYfjVaANYQilVTD7AvRAIwmyNJq3zgYC0z3QsrpURaPoQ0ig0kGbRT0L6fdPTccxmg8O3mxNf61VrD3W4EKUEeFdyoxlnPzlpcDvUx2TBzeJ74cHsYTBAKlVqoB08v28VlZERdAnpgnIfvSYBqzoY8LOyZdK",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
