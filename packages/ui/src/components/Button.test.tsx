import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Button.stories";

const ButtonStories = composeStories(stories);

describe("Button", () => {
  it("renders a link", () => {
    render(<ButtonStories.Default />);

    const button = screen.getByRole("link", {
      name: /Read the docs/,
    });

    expect(button).toBeInTheDocument();
  });
});
