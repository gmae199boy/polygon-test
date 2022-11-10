import env from "env-var";

export const ALCHEMY = {
  API_KEY: env.get("ALCHEMY_API_KEY").required().asString(),
};

export const POLYGON = {
  POLYGONSCAN_API_KEY: env.get("POLYGONSCAN_API_KEY").required().asString(),
};
