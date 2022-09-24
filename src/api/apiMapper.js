//예시
const API = process.env.REACT_APP_API;

export const EndPoint = {
  common: {
    get: {
      DOMAIN_V1_AUTO_LOGIN: `${API}/domain/jwt/check/:isManual`,
      DOMAIN_V1_DISTINCT_NERDS: `${API}/domain/v1/neordinary/distinct/nerds`,
      DOMAIN_V1_DISTINCT_KEEPERS: `${API}/domain/v1/neordinary/distinct/keepers`,
    },
    post: {
      DOMAIN_V1_LOGIN: `${API}/domain/login`,
      DOMAIN_V1_REGISTER: `${API}/domain/register`,
      DOMAIN_V1_UPDATE_NERD: `${API}/domain/v1/neordinary/nerds/:nerdId`,
    },
  },
};
