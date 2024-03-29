import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import About from '..';

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

afterEach(cleanup);