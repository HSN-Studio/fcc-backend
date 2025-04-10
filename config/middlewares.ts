export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      headers: [
        "accept-language",
        "Token",
        "Content-Type",
        "Authorization",
        "Accept",
        "Origin",
        "Response-Type",
      ],
      origin:
        process.env.NODE_ENV === "production"
          ? [
              `https://${process.env.DOMAIN}`,
              `https://${process.env.STRAPI_DOMAIN}`,
            ]
          : [
              "http://127.0.0.1:3000",
              "http://127.0.0.1:1337",
              "http://localhost:3000",
              "http://localhost:1337",
            ],
    },
  },
];
