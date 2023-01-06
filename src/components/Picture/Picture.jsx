import React, { useState } from 'react'
import './style.css'
import { okImgHref } from '../../store/constData'

function Picture(props) {
  let isSold = props.isSold
  let imgSrc = props.imgSrc
  let title = props.title
  let author = props.author
  let priceGood = props.priceGood
  let priceBad = props.priceBad

  const [isBought, setIsBought] = useState(false)
  const [isBuyLoading, setIsBuyLoading] = useState(false)

  function buyHandler() {
    setIsBuyLoading(true)
    setTimeout(() => {
      setIsBought(prev => !prev)
      setIsBuyLoading(false)
    }, 2000)
  }

  return (
    <div className={ isSold ? 'sold-in-auction good' : 'good' }>
      <img className="pic" src={ imgSrc } alt="pic" />
      <div className="good-content">
        <h2>
          «{ title }»<br />
          { author }
        </h2>
        {
          !isSold && (
            <div className="buy-block">
              <div className="price-block">
                {
                  priceBad && (
                    <div className="price-bad price-one">
                      { priceBad } $
                    </div>
                  )
                }
                {
                  priceGood && (
                    <div className="price-good price-one">
                      { priceGood } $
                    </div>
                  )
                }
              </div>
              {
                (isBuyLoading && <div className='downloading'>Обрабатывается...</div>) ||
                (!isBought && <button className="buy-btn" onClick={buyHandler}>Купить</button>) ||
                (isBought && <button className='buy-btn in-cart' onClick={buyHandler}><img src={okImgHref} alt='OK-img'/>В корзине</button>)
              }
            </div>
          )
        }
        {
          isSold && (
            <div className="buy-block">
              Продана на аукционе
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Picture