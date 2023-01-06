import { atom } from 'jotai'

const isMobileMenuActiveAtom = atom(false)
const queryAtom = atom('')
const itemsAtom = atom([
  {id: 1, title: 'Рождение Венеры', author: 'Сандро Боттичелли', imgSrc: '../assets/icons/pic1.png', priceGood: 1000000, priceBad: 2000000},
  {id: 2, title: 'Тайная вечеря', author: 'Леонардо да Винчи', imgSrc: '../assets/icons/pic2.png', priceGood: 3000000},
  {id: 3, title: 'Сотворение Адама', author: 'Микеланджело', imgSrc: '../assets/icons/pic3.png', priceGood: 5000000, priceBad: 6000000},
  {id: 4, title: 'Урок анатомии', author: 'Рембрандт', imgSrc: '../assets/icons/pic4.png', isSold: true}
])

export {
  isMobileMenuActiveAtom,
  queryAtom,
  itemsAtom
}