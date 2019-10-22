import React from "react";
import { shallow } from "enzyme";
import BoardControl from "content/board_control/board_control";
import BoardButton from "components/board_button/board_button";

describe("<BoardControl />", () => {
  it("calls save function on click", () => {
    const mockSaveFn = jest.fn();
    const mockNewFn = jest.fn();
    const wrapper = shallow(
      <BoardControl saveBoardFunc={mockSaveFn} newBoardFunc={mockNewFn} />
    );
    const save_button = wrapper
      .find(".save-button-container")
      .find(BoardButton);
    save_button.simulate("click");
    expect(mockSaveFn.mock.calls.length > 0).toBe(true);
  });
  it("calls new board function on click", () => {
    const mockSaveFn = jest.fn();
    const mockNewFn = jest.fn();
    const wrapper = shallow(
      <BoardControl saveBoardFunc={mockSaveFn} newBoardFunc={mockNewFn} />
    );
    const new_button = wrapper.find(".new-button-container").find(BoardButton);
    new_button.simulate("click");
    expect(mockNewFn.mock.calls.length > 0).toBe(true);
  });
});
