// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 4001,
  },
  experimental: { payloadExtraction: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  image: {
    dir: "public",
  },
  css: ["~/assets/styles/main.css", "~/assets/styles/article.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      meta: [
        { name: "theme-color", content: "#363031" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Firestarters - Global Business Community",
        },
        {
          property: "og:description",
          content:
            "By the people for the people! Each Firestarters member has ownership in our business community. We know the market is tough which is why our charter is to build and support each other through crowdsourced past learnings, thought leadership, expertise and strategy as you build your business.",
        },
        {
          property: "og:url",
          content: "https://firestarters.cxahub.com",
        },
        {
          property: "og:image",
          content:
            "https://hcp-273d1a36-f26b-4cd3-86d1-5a90b1755f8e.s3.us-east-1.amazonaws.com/repository/image/linkedin/firestarters-linkedin-banner-1200px.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
    },
  },
  nitro: {
    routeRules: {
      "/img/**": {
        headers: {
          "cache-control": `public,max-age=31536000,s-maxage=31536000`,
        },
      },
      "/_nuxt/**": {
        /*
        headers: {
          "cache-control": `public,max-age=31536000,s-maxage=31536000`,
        },
        */
      },
    },
  },
  runtimeConfig: {
    public: {
      BASE_PATH: process.env.BASE_PATH,
      API_HOST: process.env.API_HOST,
      API_PORT: process.env.API_PORT,
      API_ROOT: process.env.API_ROOT,
      API_VER: process.env.API_VER,
      DATEFORMAT: process.env.DATEFORMAT,
      COMPANY_TEL: process.env.COMPANY_TEL,
      NOREPLY_EMAIL: process.env.NOREPLY_EMAIL,
      COMPANY_EMAIL: process.env.COMPANY_EMAIL,
      SMTP_EMAIL: process.env.SMTP_EMAIL,
      API_URL: process.env.API_URL,
      CDN_URL: process.env.CDN_URL,
      CDN_REPOSITORY_PATH: process.env.CDN_REPOSITORY_PATH,
      FIRESTARTERS_WEBSITE_URL: process.env.FIRESTARTERS_WEBSITE_URL,
      FIRESTARTERS_FEEDBACK_SURVEY_URL:
        process.env.FIRESTARTERS_FEEDBACK_SURVEY_URL,
      FIRESTARTERS_LINKEDIN_URL: process.env.FIRESTARTERS_LINKEDIN_URL,
      FLASH_WEBSITE_URL: process.env.FLASH_WEBSITE_URL,
      API_ANALYTICS_PAGE_VIEW_ROUTE: process.env.API_ANALYTICS_PAGE_VIEW_ROUTE,
      API_BUSINESS_CHANNEL_ROUTE: process.env.API_BUSINESS_CHANNEL_ROUTE,
      API_CONTENT_ROUTE: process.env.API_CONTENT_ROUTE,
      API_CONTENT_INDUSTRY_REL_ROUTE:
        process.env.API_CONTENT_INDUSTRY_REL_ROUTE,
      API_CONTENT_RELATED_REL_ROUTE: process.env.API_CONTENT_RELATED_REL_ROUTE,
      API_CONTENT_VIDEO_REL_ROUTE: process.env.API_CONTENT_VIDEO_REL_ROUTE,
      API_COUNTRY_ROUTE: process.env.API_COUNTRY_ROUTE,
      API_EMAIL_ROUTE: process.env.API_EMAIL_ROUTE,
      API_EVENT_ROUTE: process.env.API_EVENT_ROUTE,
      API_FORUM_TAG_ROUTE: process.env.API_FORUM_TAG_ROUTE,
      API_INDUSTRY_ROUTE: process.env.API_INDUSTRY_ROUTE,
      API_LOGIN_ROUTE: process.env.API_LOGIN_ROUTE,
      API_PROFILE_ROUTE: process.env.API_PROFILE_ROUTE,
      API_REGISTER_ROUTE: process.env.API_REGISTER_ROUTE,
      API_RESET_PASSWORD_ROUTE: process.env.API_RESET_PASSWORD_ROUTE,
      API_SOCIAL_NETWORK_SHARE_ROUTE:
        process.env.API_SOCIAL_NETWORK_SHARE_ROUTE,
      API_USER_ROUTE: process.env.API_USER_ROUTE,
      API_USER_ADDRESS_REL_ROUTE: process.env.API_USER_ADDRESS_REL_ROUTE,
      API_USER_BUSINESS_CHANNEL_REL_ROUTE:
        process.env.API_USER_BUSINESS_CHANNEL_REL_ROUTE,
      API_USER_COMMENT_ROUTE: process.env.API_USER_COMMENT_ROUTE,
      API_USER_COMMENT_LIKE_ROUTE: process.env.API_USER_COMMENT_LIKE_ROUTE,
      API_USER_COMMENT_SHARE_ROUTE: process.env.API_USER_COMMENT_SHARE_ROUTE,
      API_USER_FIELD_ROUTE: process.env.API_USER_FIELD_ROUTE,
      API_USER_FIELD_REL_ROUTE: process.env.API_USER_FIELD_REL_ROUTE,
      API_USER_FORUM_TAG_REL_ROUTE: process.env.API_USER_FORUM_TAG_REL_ROUTE,
      API_USER_INDUSTRY_REL_ROUTE: process.env.API_USER_INDUSTRY_REL_ROUTE,
      API_USER_MEMBER_PREFERENCE_REL_ROUTE:
        process.env.API_USER_MEMBER_PREFERENCE_REL_ROUTE,
      API_USER_MEMBER_ROUTE: process.env.API_USER_MEMBER_ROUTE,
      API_USER_PREFERENCE_ROUTE: process.env.API_USER_PREFERENCE_ROUTE,
      API_USER_SECURITY_KEY_REL_ROUTE:
        process.env.API_USER_SECURITY_KEY_REL_ROUTE,
      API_USER_TITLE_ROUTE: process.env.API_USER_TITLE_ROUTE,
    },
  },

  env: {
    baseUrl:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3001"
        : "https://my-domain.com",
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 300, 700, 800, 900],
      },
      "Roboto+Condensed": {
        wght: [100, 300, 700, 800, 900],
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
