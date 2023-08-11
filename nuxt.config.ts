// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image-edge"],
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/moment"],
  css: ["~/assets/styles/main.css", "~/assets/styles/article.css"],
  runtimeConfig: {
    public: {
      VUE_APP_BASE_PATH: process.env.VUE_APP_BASE_PATH,
      VUE_APP_API_HOST: process.env.VUE_APP_API_HOST,
      VUE_APP_API_PORT: process.env.VUE_APP_API_PORT,
      VUE_APP_API_ROOT: process.env.VUE_APP_API_ROOT,
      VUE_APP_API_VER: process.env.VUE_APP_API_VER,
      VUE_APP_DATEFORMAT: process.env.VUE_APP_DATEFORMAT,
      VUE_APP_COMPANY_TEL: process.env.VUE_APP_COMPANY_TEL,
      VUE_APP_NOREPLY_EMAIL: process.env.VUE_APP_NOREPLY_EMAIL,
      VUE_APP_COMPANY_EMAIL: process.env.VUE_APP_COMPANY_EMAIL,
      VUE_APP_SMTP_EMAIL: process.env.VUE_APP_SMTP_EMAIL,
      VUE_APP_API_URL: process.env.VUE_APP_API_URL,
      VUE_APP_CDN_URL: process.env.VUE_APP_CDN_URL,
      VUE_APP_CDN_REPOSITORY_PATH: process.env.VUE_APP_CDN_REPOSITORY_PATH,
      VUE_APP_FIRESTARTERS_WEBSITE_URL:
        process.env.VUE_APP_FIRESTARTERS_WEBSITE_URL,
      VUE_APP_FIRESTARTERS_FEEDBACK_SURVEY_URL:
        process.env.VUE_APP_FIRESTARTERS_FEEDBACK_SURVEY_URL,
      VUE_APP_FIRESTARTERS_LINKEDIN_URL:
        process.env.VUE_APP_FIRESTARTERS_LINKEDIN_URL,
      VUE_APP_API_ANALYTICS_PAGE_VIEW_ROUTE:
        process.env.VUE_APP_API_ANALYTICS_PAGE_VIEW_ROUTE,
      VUE_APP_API_BUSINESS_CHANNEL_ROUTE:
        process.env.VUE_APP_API_BUSINESS_CHANNEL_ROUTE,
      VUE_APP_API_CONTENT_ROUTE: process.env.VUE_APP_API_CONTENT_ROUTE,
      VUE_APP_API_CONTENT_INDUSTRY_REL_ROUTE:
        process.env.VUE_APP_API_CONTENT_INDUSTRY_REL_ROUTE,
      VUE_APP_API_CONTENT_RELATED_REL_ROUTE:
        process.env.VUE_APP_API_CONTENT_RELATED_REL_ROUTE,
      VUE_APP_API_CONTENT_VIDEO_REL_ROUTE:
        process.env.VUE_APP_API_CONTENT_VIDEO_REL_ROUTE,
      VUE_APP_API_COUNTRY_ROUTE: process.env.VUE_APP_API_COUNTRY_ROUTE,
      VUE_APP_API_EMAIL_ROUTE: process.env.VUE_APP_API_EMAIL_ROUTE,
      VUE_APP_API_EVENT_ROUTE: process.env.VUE_APP_API_EVENT_ROUTE,
      VUE_APP_API_FORUM_TAG_ROUTE: process.env.VUE_APP_API_FORUM_TAG_ROUTE,
      VUE_APP_API_INDUSTRY_ROUTE: process.env.VUE_APP_API_INDUSTRY_ROUTE,
      VUE_APP_API_LOGIN_ROUTE: process.env.VUE_APP_API_LOGIN_ROUTE,
      VUE_APP_API_PROFILE_ROUTE: process.env.VUE_APP_API_PROFILE_ROUTE,
      VUE_APP_API_REGISTER_ROUTE: process.env.VUE_APP_API_REGISTER_ROUTE,
      VUE_APP_API_RESET_PASSWORD_ROUTE:
        process.env.VUE_APP_API_RESET_PASSWORD_ROUTE,
      VUE_APP_API_SOCIAL_NETWORK_SHARE_ROUTE:
        process.env.VUE_APP_API_SOCIAL_NETWORK_SHARE_ROUTE,
      VUE_APP_API_USER_ROUTE: process.env.VUE_APP_API_USER_ROUTE,
      VUE_APP_API_USER_ADDRESS_REL_ROUTE:
        process.env.VUE_APP_API_USER_ADDRESS_REL_ROUTE,
      VUE_APP_API_USER_BUSINESS_CHANNEL_REL_ROUTE:
        process.env.VUE_APP_API_USER_BUSINESS_CHANNEL_REL_ROUTE,
      VUE_APP_API_USER_COMMENT_ROUTE:
        process.env.VUE_APP_API_USER_COMMENT_ROUTE,
      VUE_APP_API_USER_COMMENT_LIKE_ROUTE:
        process.env.VUE_APP_API_USER_COMMENT_LIKE_ROUTE,
      VUE_APP_API_USER_COMMENT_SHARE_ROUTE:
        process.env.VUE_APP_API_USER_COMMENT_SHARE_ROUTE,
      VUE_APP_API_USER_FIELD_ROUTE: process.env.VUE_APP_API_USER_FIELD_ROUTE,
      VUE_APP_API_USER_FIELD_REL_ROUTE:
        process.env.VUE_APP_API_USER_FIELD_REL_ROUTE,
      VUE_APP_API_USER_FORUM_TAG_REL_ROUTE:
        process.env.VUE_APP_API_USER_FORUM_TAG_REL_ROUTE,
      VUE_APP_API_USER_INDUSTRY_REL_ROUTE:
        process.env.VUE_APP_API_USER_INDUSTRY_REL_ROUTE,
      VUE_APP_API_USER_MEMBER_PREFERENCE_REL_ROUTE:
        process.env.VUE_APP_API_USER_MEMBER_PREFERENCE_REL_ROUTE,
      VUE_APP_API_USER_MEMBER_ROUTE: process.env.VUE_APP_API_USER_MEMBER_ROUTE,
      VUE_APP_API_USER_PREFERENCE_ROUTE:
        process.env.VUE_APP_API_USER_PREFERENCE_ROUTE,
      VUE_APP_API_USER_SECURITY_KEY_REL_ROUTE:
        process.env.VUE_APP_API_USER_SECURITY_KEY_REL_ROUTE,
      VUE_APP_API_USER_TITLE_ROUTE: process.env.VUE_APP_API_USER_TITLE_ROUTE,
    },
  },

  env: {
    baseUrl:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
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
