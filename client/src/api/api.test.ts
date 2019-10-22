import API from "api/api";
import { Link, URLTYPE, POSTResponse } from "types";

describe("API", () => {
  it("returns success on successful POST of adding new song", () => {
    const id: string = "0";
    const link: Link = {
      url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      urlType: URLTYPE.SOUNDCLOUD
    };
    console.log(API.BASE_URL);
    return API.addLinkToBoard(id, link, "_").then(function(
      response: POSTResponse
    ) {
      expect(response.success).toBe(true);
    });
  });
  it("returns error on server error for adding new song", () => {
    expect(false).toBe(true);
  });
});
