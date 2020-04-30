const API_ROOT = "http://localhost:3000/api/v1"
//need to change when we go to heroku

const token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type":"application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

const login = data => {
    return fetch(`${API_ROOT}/auth`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({user: data})
    }).then(res => res.json());
};
  
const getCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
        headers: headers()
    }).then(res => {
        return res.json();
    });
};

const createUser = (data) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json());
};

const getBoard = (board_id) => {
  return fetch(`${API_ROOT}/boards/${board_id}`, {headers: headers()})
  .then(response => response.json())
}

const getBoards = () => {
  return fetch(`${API_ROOT}/boards`, {headers: headers()})
  .then(response => response.json())
}

const createBoard = (boardObject) => {
  return fetch(`${API_ROOT}/boards/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(boardObject)
  }).then(res => res.json());
}

const editBoard = (boardObject) => {
  return fetch(`${API_ROOT}/boards/${boardObject.id}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(boardObject)
  }).then(res => res.json());
}

const deleteBoard = (board_id) => {
  return fetch(`${API_ROOT}/boards/${board_id}`, {
    method: "DELETE",
  }).then(res => res.json());
}

export const api = {
    auth: {
      login,
      getCurrentUser
    },
    user: {
      createUser
    },
    boards: {
      getBoard,
      getBoards,
      createBoard,
      editBoard,
      deleteBoard
    }
};