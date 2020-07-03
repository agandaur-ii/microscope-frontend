import { objectToFormData } from 'object-to-formdata';

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

const editUser = (userObject) => {
  return fetch(`${API_ROOT}/users/${userObject.id}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(userObject)
  }).then(res => res.json());
}

const deleteUser = (user_id) => {
  return fetch(`${API_ROOT}/users/${user_id}`, {
    method: "DELETE",
    headers: headers(),
  }).then(res => res.json());
}

const getBoard = (board_id) => {
  return fetch(`${API_ROOT}/boards/${board_id}`, {headers: headers()})
  .then(response => response.json())
}

const getBoards = () => {
  return fetch(`${API_ROOT}/boards`, {headers: headers()})
  .then(response => response.json())
}

const createBoard = (boardObject) => {
  let nestedObject = {'board': boardObject}
  let formData = objectToFormData(nestedObject)

  return fetch(`${API_ROOT}/boards/`, {
    method: "POST",
    headers: {Authorization: token()},
    body: formData
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
    headers: headers(),
  }).then(res => res.json());
}

const getIcons = () => {
  return fetch(`${API_ROOT}/icons`, {headers: headers()})
  .then(response => response.json())
}

const createIcon = (iconObject) => {
  let nestedObject = {
    'icon': iconObject.icon,
    'body': iconObject.body
  }
  let formData = objectToFormData(nestedObject)
  return fetch(`${API_ROOT}/icons/`, {
    method: "POST",
    headers: {Authorization: token()},
    body: formData
  }).then(res => res.json());
}

const editIcon = (iconObject) => {
  return fetch(`${API_ROOT}/icons/${iconObject.id}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(iconObject)
  }).then(res => res.json());
}

const deleteIcon = (icon_id) => {
  return fetch(`${API_ROOT}/icons/${icon_id}`, {
    method: "DELETE",
    headers: headers(),
  }).then(res => res.json());
}

export const api = {
    auth: {
      login,
      getCurrentUser
    },
    user: {
      createUser,
      editUser,
      deleteUser
    },
    boards: {
      getBoard,
      getBoards,
      createBoard,
      editBoard,
      deleteBoard
    },
    icons: {
      getIcons,
      createIcon,
      editIcon,
      deleteIcon
    }
};