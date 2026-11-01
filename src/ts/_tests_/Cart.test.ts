import Cart from '../service/Cart';
import Movie from '../domain/Movie';

describe('Cart', () => {
  let cart: Cart;
  const movie1 = new Movie(
    1009,
    'Мстители',
    'The Avengers',
    'IMAX',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17',
    2000,
  );
  const movie2 = new Movie(
    1010,
    'Мстители: Эра Альтрона',
    'Avengers: Age of Ultron',
    'IMAX',
    2015,
    'США',
    'A New Age Has Come',
    ['фантастика', 'боевик', 'приключения'],
    '141 мин. / 02:21',
    2500,
  );

  beforeEach(() => {
    cart = new Cart();
    cart.add(movie1);
    cart.add(movie2);
  });

  test('добавление фильма в корзину', () => {
    expect(cart.items).toHaveLength(2);
    expect(cart.items[0]).toBeInstanceOf(Movie);
    expect(cart.items[0]).toEqual(movie1);
  });

  test('суммарная стоимость без скидки', () => {
    expect(cart.sum()).toBe(4500);
  });

  test('суммарная стоимость со скидкой 50%', () => {
    expect(cart.totalSum(50)).toBe(2250);
  });

  test('суммарная стоимость со скидкой 0%', () => {
    expect(cart.totalSum(0)).toBe(4500);
  });

  test('удаление существующего товара по id', () => {
    cart.deleteItem(1009);
    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].id).toBe(1010);
  });

  test('удаление несуществующего товара не изменяет корзину', () => {
    cart.deleteItem(9999);
    expect(cart.items).toHaveLength(2);
  });
});