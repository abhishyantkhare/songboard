import {Link, POSTResponse, Board} from './types'


class API {
  static readonly BASE_URL: string = process.env.REACT_APP_BACKEND_URL!;
  /*
  Contract
    *requires:
      *board id
      *link
    *ensures:
      *if valid id and link, link gets sent in POST request to backend & returns success
      *returns error if server has error

  */
  static addLinkToBoard(board_id: string, link: Link, session_token: string): Promise<POSTResponse> {

    return fetch(API.BASE_URL + 'add_song', {
      method: 'POST',
      body: JSON.stringify({
        board_id: board_id,
        link: link
      })
    }).then(function(response) {
      return response.json();
    });
  }

  static getBoard(board_id:string, session_token:string):Promise<Board>{
    return fetch(API.BASE_URL + "boards/" + board_id)
    .then(function(response) {
      return response.json()
    })
  }

  static getBoardLinks(board_id:string, session_token:string):Promise<Link[]>{
    return new Promise(function(resolve, reject) {
      API.getBoard(board_id, session_token)
      .then(function(board) {
        resolve(board.links)
      })
    })
  }
}

export default API;