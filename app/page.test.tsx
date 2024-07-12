import { describe, it, expect } from 'vitest';
import {render} from "@testing-library/react";
import Page from "./page";

describe('Page', () => {
  it('render tasks', () => {
    const { container } = render(<Page />)
    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  })
})