import React from "react";
import Hello from "@/components/Hello";
import * as reactRedux from "react-redux";
import { store } from "@/store/store";

describe("Hello", () => {
  it("renders Hello component", () => {
    const useSelectorMock = cy.stub(reactRedux, "useSelector");
    const currentState = {
      generic: { title: "test" },
    };
    useSelectorMock.returns(currentState);
    cy.mount(
      <reactRedux.Provider store={store}>
        <Hello />
      </reactRedux.Provider>
    );
    cy.get("span").contains("Good news: We're going to make better UI soon.");
  });
});
