import React from "react";
import { shallow } from "enzyme";
import AddSong from "content/add_song/add_song";
import { TextField } from "@material-ui/core";
import { URLTYPE } from "types";

describe("<AddSong />", () => {
  it("lets user enter text onto textfield which gets set as state", () => {
    const wrapper = shallow(<AddSong />);
    const url: string = "test.url";
    wrapper.find(TextField).simulate("change", { target: { value: url } });
    expect(wrapper.instance().URL).toEqual(url);
  });
  it("validates links correctly", () => {
    const invalid_domain_url: string = "invalid.url";
    const valid_spotify_url: string =
      "https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX?si=qh4n4skbTFK1nUyEQobiIQ";
    const valid_spotify_uri: string = "spotify:track:2374M0fQpWi3dLnB54qaLX";
    const valid_soundcloud_url: string =
      "https://soundcloud.com/lifeofdesiigner/desiigner-panda";
    const valid_youtube_url: string =
      "https://www.youtube.com/watch?v=Jg5wkZ-dJXA";
    const invalid_spotify_url: string =
      "https://open.spotify.com/track/2374M0fQpWi3dLnB54qaL?si=qh4n4skbTFK1nUyEQobiIQ";
    expect(false).toBe(true);
  });
  it("selects spotify link correctly", () => {
    const valid_spotify_url: string =
      "https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX?si=qh4n4skbTFK1nUyEQobiIQ";
    const wrapper = shallow(<AddSong />);
    expect(wrapper.instance().determineURLType(valid_spotify_url)).toBe(
      URLTYPE.SPOTIFY
    );
  });
  it("selects soundcloud link correctly", () => {
    const valid_soundcloud_url: string =
      "https://soundcloud.com/lifeofdesiigner/desiigner-panda";
    const wrapper = shallow(<AddSong />);
    expect(wrapper.instance().determineURLType(valid_soundcloud_url)).toBe(
      URLTYPE.SOUNDCLOUD
    );
  });
  it("selects youtube link correctly", () => {
    const valid_youtube_url: string =
      "https://www.youtube.com/watch?v=Jg5wkZ-dJXA";
    const wrapper = shallow(<AddSong />);
    expect(wrapper.instance().determineURLType(valid_youtube_url)).toBe(
      URLTYPE.YOUTUBE
    );
  }),
    it("selects error on invalid link", () => {
      const invalid_domain_url: string = "invalid.url";
      const wrapper = shallow(<AddSong />);
      expect(wrapper.instance().determineURLType(invalid_domain_url)).toBe(
        URLTYPE.ERROR
      );
    });
});
