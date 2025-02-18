// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Why FarmingLabs", href: "/why-farming-labs" },
      // {
      //   title: "Components",
      //   href: "/components",
      //   items: [
      //     { title: "Stepper", href: "/stepper" },
      //     { title: "Tabs", href: "/tabs" },
      //     { title: "Note", href: "/note" },
      //     { title: "Code Block", href: "/code-block" },
      //     { title: "Image & Link", href: "/image-link" },
      //     { title: "Custom", href: "/custom" },
      //   ],
      // },
      {
        title: "Befter",
        href: "/befter",
        items: [
          { title: "Installation", href: "/installation" },
          {
            title: "Usage",
            href: "/usage",
            items: [
              { title: "Creating Hook", href: "/creating-hooks" },
              { title: "Calling Hook", href: "/calling-hooks" },
              { title: "Getting Hook", href: "/getting-hooks" },
              { title: "Removing Hook", href: "/removing-hooks" },
              { title: "Updating Hook", href: "/updating-hooks" },
              {
                title: "Before & After Hooks",
                href: "/before-and-after-hooks",
              },

              { title: "Execution Type", href: "/execution-type" },
            ],
          },

          { title: "API Reference", href: "/api-reference" },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
