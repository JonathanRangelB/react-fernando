import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('pruebas en <FirstApp />', () => {
  //   test('debe de hacer match con el snapshot', () => {
  //     const title = 'Hola soy un sayayin';
  //     const {container} = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot()
  //   });
  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Hola soy un sayayin';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
    // const h1 = container.querySelector("h1")
    // expect(h1.innerHTML).toContain(title)
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'hola, soy pepe';
    const subtitle = 123;

    const { getByText } = render(
      <FirstApp subtitle={subtitle} title={title} />
    );
    expect(getByText(subtitle)).toBeTruthy();
  });
});
