export const navbarRoutes = (student?: boolean) => {
  return [
    {
      name: "Leaderboard",
      path: "/#leaderboard",
    },
    {
      name: "How it works",
      path: "#how-it-works",
    },

    {
      name: "FAQ",
      path: "#faqs",
    },
    {
      name: student ? "For Donors" : "For students",
      path: student ? "/" : "/students",
    },
  ];
};

export const footerRoutes = [
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },

  {
    name: "Privacy",
    path: "/privacy",
  },
  {
    name: "Terms and conditions",
    path: "/terms-of-services",
  },
];

export const tersmRoutes = [
  {
    name: "Terms",
    path: "/terms-of-services",
  },
  {
    name: "Privacy",
    path: "/privacy",
  },
  {
    name: "Cookies",
    path: "/cookies",
  },
];
