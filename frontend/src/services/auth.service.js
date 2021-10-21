import http from "../http-common";

class AuthDataService {
  register(user) {
    return http.post("/users/register", user);
  }
  login(user) {
    return http.post("/users/login", user);
  }
}

export default new AuthDataService();
