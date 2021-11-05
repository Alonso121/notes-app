import http from "../http-common";

class NoteDataService {
  getNotes(token) {
    return http.get("/api/notes", {
      headers: { Authorization: token },
    });
  }
  createNote({ token, date, time, title }) {
    return http.post(
      `/api/notes`,
      { date, time, title },
      {
        headers: { Authorization: token },
      }
    );
  }
  starNote({ id, token, starred }) {
    return http.put(
      `/api/notes/${id}`,
      { starred },
      {
        headers: { Authorization: token },
      }
    );
  }
  completeNote({ id, token, complete }) {
    return http.put(
      `/api/notes/complete/${id}`,
      { complete },
      {
        headers: { Authorization: token },
      }
    );
  }
  deleteNote({ id, token }) {
    return http.delete(`/api/notes/delete/${id}`, {
      headers: { Authorization: token },
    });
  }
  deleteAllNotes(token) {
    return http.delete(`/api/notes/delete`, {
      headers: { Authorization: token },
    });
  }
}

export default new NoteDataService();
