import { render, screen } from '@testing-library/angular';
import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  it('should render the component', async () => {
    await render(SimpleComponent);
    expect(screen.getByText('simple works!')).toBeInTheDocument();
  });
});
