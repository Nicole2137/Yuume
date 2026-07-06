import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the main logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Logo of yuume/i);
    expect(logo).toBeInTheDocument();
  });
});
