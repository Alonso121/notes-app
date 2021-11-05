import http from "../http-common";

class AuthDataService {
  register(user) {
    return http.post("/users/register", user);
  }
  login(user) {
    return http.post("/users/login", user);
  }
  verifyToken(token) {
    return http.get("/users/verify", {
      headers: { Authorization: token },
    });
  }
  deleteUser(token) {
    return http.delete("/users/delete", {
      headers: { Authorization: token },
    });
  }
}

export default new AuthDataService();
