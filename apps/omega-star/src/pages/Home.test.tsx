import { render, screen } from "@testing-library/react";

import Home from "@/pages/index.page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Omega Star Myopic Design",
    });

    expect(heading).toBeInTheDocument();
  });
});
