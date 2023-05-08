import HomePage from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('HomePage << test', () => {
    it('renders the heading', () => {
      const { getByText } = render(<HomePage />);
      expect(getByText('welcome')).toBeInTheDocument();
    });
  });