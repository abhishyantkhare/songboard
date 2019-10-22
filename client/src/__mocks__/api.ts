import { Link, POSTResponse, Board, URLTYPE } from "types";

var boards: Board[] = [
  {
    id: "0",
    links: [
      {
        url: "https://open.spotify.com/embed/track/5JtPGzRgrWxkXX9LoROq3d",
        urlType: URLTYPE.SPOTIFY
      },
      {
        url: "https://www.youtube.com/embed/miJAfs7jhak",
        urlType: URLTYPE.YOUTUBE
      },
      {
        url:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        urlType: URLTYPE.SOUNDCLOUD
      }
    ]
  }
];

class API {
  static readonly BASE_URL: string = "http://localhost:3005/";
  /*
  Contract
    *requires:
      *board id
      *link
    *ensures:
      *if valid id and link, link gets sent in POST request to backend & returns success
      *returns error if server has error

  */
  static addLinkToBoard(
    board_id: string,
    link: Link,
    session_token: string
  ): Promise<POSTResponse> {
    return new Promise(function(resolve, reject) {
      let board: Board = boards.find((b: Board) => b.id == board_id)!;
      board.links.push(link);
      let response: POSTResponse = {
        success: true,
        message: "POST successful"
      };
      resolve(response);
    });
  }
  static getBoard(board_id: string, session_token: string): Promise<Board> {
    return new Promise(function(resolve, reject) {
      resolve(boards[parseInt(board_id)]);
    });
  }

  static newBoard(): Promise<POSTResponse> {
    return new Promise(function(resolve, reject) {
      var id = String(boards.length);
      let board = {
        id: id,
        links: []
      };
      boards.push(board);
      let response: POSTResponse = {
        success: true,
        message: id
      };
      resolve(response);
    });
  }

  static saveBoard(board: Board): Promise<POSTResponse> {
    return new Promise(function(resolve, reject) {
      let board_ind = boards.findIndex((b: Board) => b.id == board.id)!;
      boards[board_ind] = board;
      let response: POSTResponse = {
        success: true,
        message: board.id
      };
      resolve(response);
    });
  }

  static deleteLinkFromBoard(
    board: Board,
    link: Link,
    session_token: string
  ): Promise<POSTResponse> {
    return new Promise(function(resolve, reject) {
      let board_ind = boards.findIndex((b: Board) => b.id == board.id)!;
      boards[board_ind].links = board.links.filter(l => l.url != link.url);
      let response: POSTResponse = {
        success: true,
        message: link.url
      };
      resolve(response);
    });
  }
}

export default API;
