const BASE_URL = process.env.REACT_APP_BACKEND_URL

export function del_req(endpoint, body) {
  return fetch(BASE_URL + endpoint, {
    method: 'DELETE',
    body: body
  })
}