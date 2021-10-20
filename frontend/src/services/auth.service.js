import http from "../http-common";

class AuthDataService {
  register(user) {
    return http.post("/users/register", user);
  }
}

export default new AuthDataService();
