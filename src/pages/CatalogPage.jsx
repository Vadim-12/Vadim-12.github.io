import React from 'react'
import Picture from '../components/Picture/Picture'
import { useAtom } from 'jotai'
import { itemsAtom, queryAtom } from '../store/atoms'

function CatalogPage() {
  const [query, ] = useAtom(queryAtom)
  const [items, ] = useAtom(itemsAtom)

  return (
    <div className="container">
      <h1>Картины эпохи Возрождения</h1>
      <div className="goods-block">
        {
          items.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1).map(item => {
            return (
              <Picture
                key={ item.id }
                id={ item.id }
                title={ item.title }
                author={ item.author }
                isSold={ item.isSold }
                priceBad={ item.priceBad }
                priceGood={ item.priceGood }
                imgSrc={ item.imgSrc }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default CatalogPage