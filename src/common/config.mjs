import env from "env-var";

export const ALCHEMY = {
  API_KEY: env.get("ALCHEMY_API_KEY").required().asString(),
};
