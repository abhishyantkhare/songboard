import React from "react";
import { shallow } from "enzyme";
import BoardView from "content/board_view/board_view";
import { URLTYPE, Link } from "types";
import SongCard from "components/songcard/songcard";
import AddSong from "content/add_song/add_song";
import BoardControl from "content/board_control/board_control";
import API from "__mocks__/api";
import { match } from "react-router";

type paramsMock = {
  id: string;
};

const match_prop: match<paramsMock> = {
  params: {
    id: "0"
  },
  isExact: false,
  path: "",
  url: ""
};

describe("<BoardView />", () => {
  it("displays stored links", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    const board_links: Link[] = wrapper.instance().links;
    board_links.forEach(link => {
      expect(
        wrapper
          .find(SongCard)
          .findWhere(c => c.getLink() === link)
          .exists()
      ).toBe(true);
    });
  });
  it("handles deleting logic for links", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    const link_0 = {
      url:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/591147435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      urlType: URLTYPE.SOUNDCLOUD
    };
    wrapper
      .instance()
      .deleteLink(link_0)
      .then(() => {
        expect(
          wrapper
            .find(SongCard)
            .findWhere(c => c.getLink() === link)
            .exists()
        ).toBe(false);
      });
  });
  it("has an AddSong component", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    expect(wrapper.containsMatchingElement(<AddSong />)).toBe(true);
  });
  it("adds song on add link call", () => {
    const link: Link = {
      url: "https://open.spotify.com/embed/track/5ry2OE6R2zPQFDO85XkgRb",
      urlType: URLTYPE.SPOTIFY
    };
    const wrapper = shallow(<BoardView match={match_prop} />);
    return wrapper
      .instance()
      .addLink(link)
      .then(() => {
        expect(wrapper.instance().links.includes(link)).toBe(true);
      });
  });
  it("makes a new board with new id on new board method", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    const id = wrapper.instance().id;
    return wrapper
      .instance()
      .makeNewBoard()
      .then(() => {
        expect(wrapper.instance().id == id).toBe(false);
      });
  });
  it("makes a new boad with empty links", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    wrapper.instance().makeNewBoard();
    expect(wrapper.instance().links.length == 0).toBe(true);
  });
  it("calls API for saving the board", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    const api_save_board_spy = jest.spyOn(API, "saveBoard");
    wrapper
      .instance()
      .saveBoard()
      .then(() => {
        expect(api_save_board_spy).toHaveBeenCalled();
      });
  });
  it("passes newBoard to BoardControl", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    const new_board_spy = jest.spyOn(wrapper.instance(), "makeNewBoard");
    const board_control = wrapper.find(BoardControl);
    board_control
      .props()
      .newBoardFunc()
      .then(() => {
        expect(new_board_spy).toHaveBeenCalled();
      });
  });
  it("passes saveBoard to BoardControl", () => {
    const wrapper = shallow(<BoardView match={match_prop} />);
    const save_board_spy = jest.spyOn(wrapper.instance(), "saveBoard");
    const board_control = wrapper.find(BoardControl);
    board_control
      .props()
      .saveBoardFunc()
      .then(() => {
        expect(save_board_spy).toHaveBeenCalled();
      });
  });
});
