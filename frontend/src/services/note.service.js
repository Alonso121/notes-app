import http from "../http-common";

class NoteDataService {
  getNotes(token) {
    return http.get("/api/notes", {
      headers: { Authorization: token },
    });
  }
}

export default new NoteDataService();
