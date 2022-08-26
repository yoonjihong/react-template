import { render } from '@testing-library/react';

import { describe, it } from '@jest/globals';
import Counter from '.';

describe('jsInfo test', () => {
  it('name test', () => {
    render(<Counter />);
  });
});
