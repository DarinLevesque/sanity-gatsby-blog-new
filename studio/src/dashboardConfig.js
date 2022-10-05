export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "633df56faa674f005ae63a9d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-new-studio-o652489z",
                  apiId: "11604e0c-d0b2-47d6-8507-2ef53c65a62e",
                },
                {
                  buildHookId: "633df56f189d8e0c9d6aa3b2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-new-web",
                  apiId: "999c559b-6629-40de-afbe-f8cd0427c24e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DarinLevesque/sanity-gatsby-blog-new",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-new-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
