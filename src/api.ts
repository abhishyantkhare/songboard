import { Link, POSTResponse, Board , URLTYPE} from './types'


var boards:Board[] = [
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
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
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
  static addLinkToBoard(board_id:string, link: Link, session_token: string): Promise<POSTResponse> {
    return new Promise(function(resolve, reject) {
      var board = boards[parseInt(board_id)];
      board.links.push(link)
      let response:POSTResponse = {
        success: true,
        message: "POST successful"
      };
      resolve(response);
    })
    
  }

  static getBoard(board_id:string , session_token: string): Promise<Board> {
    return new Promise(function(resolve,reject) {
      resolve(boards[parseInt(board_id)])
    })
  }

  static getBoardLinks(board_id:string, session_token: string): Promise<Link[]> {
    return new Promise(function (resolve, reject) {
      API.getBoard(board_id, session_token)
        .then(function (board) {
          resolve(board.links)
        })
    })
  }
}

export default API;
