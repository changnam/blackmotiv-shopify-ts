import defineConfig from "./envConfig.ts";

export default defineConfig({
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});
