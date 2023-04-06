function App() {

  const places = [
    {
      name: "San Martin de los Andes",
      price: 450,
      image: "/sanMartinDeLosAndes.jpg"
    },
    {
      name: "Isla Margarita",
      price: 500,
      image: "/islaMargarita.jpg"
    },
    {
      name: "Cataratas del Iguazu",
      price: 400,
      image: "/cataratasDelIguazu.jpg"
    },
    {
      name: "Machu Pichu",
      price: 400,
      image: "/machuPichu.jpg"
    }
  ]

  return (
    <>
      <header className="header">
        <img src="/header.jpg" className="headerBackground"/>
        <nav className="headerNav">
          <h3 className="headerNavLogo">EASY<span>TRAVEL</span></h3>
          <div className="headerNavButtons">
            <button><img src='/icons/calendar.png'/></button>
            <button><img src='/icons/globe.png'/></button>
            <button><img src='/icons/phone.png'/></button>
          </div>
          <div className="headerNavLogIn">
            <div className="headerNavLogInIcon">
              <img src='/icons/user.png' className="headerNavLogInIconImage"/>
            </div>
            <h4 className="headerNavLogInText">Ingresar</h4>
          </div>
        </nav>
        <div className="headerTitle">
          <div></div>
          <h2>RIO DE JANEIRO</h2>
          <h3>5 días / 4 noches</h3>
        </div>
        <div className="headerInfo">
          <p className="headerInfoText">
            <span className="headerInfoTextBold">
              Celebra la cultura brasileña en el lugar donde nació la samba y disfruta de las asombrosas maravillas naturales que la ciudad tiene para ofrecer.
            </span>
            <span>
              Hay mucho que ver en Río, antes, durante y después del Carnaval, desde el Pan de Azúcar a la estatua del Cristo Redentor del Corcovado y las famosas playas de Copacabana e Ipanema. Muchos tour operadores ofrecen una gran variedad de visitas en Río, la posibilidad de descubrir la ciudad en helicóptero, o sus aguas tibias y atractivas en barco. 
            </span>
          </p>
          <ol className="headerInfoList">
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/plane.png'/>
              <p className="headerInfoListItemText">Sin escalas</p>
            </li>
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/taxi.png'/>
              <p className="headerInfoListItemText">Transporte</p>
            </li>
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/suitcase.png'/>
              <p className="headerInfoListItemText">23 KGs</p>
            </li>
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/hotel.png'/>
              <p className="headerInfoListItemText">Hospedaje</p>
            </li>
          </ol>
          <footer className="headerInfoFooter">
            <h5>PROMO DESDE</h5>
            <h1>$450</h1>
            <h4>USD</h4>
            <button className="headerInfoFooterButton">
              Reservar
            </button>
          </footer>
        </div>
      </header>
      <main className="main">
        <img className="mainCircleImage" src='/mainBeach.jpg'/>
        <img className="mainCristoImage" src="/CristoRedentor.png"/>
        <article className="mainBox">
          <header className="mainBoxHeader">
            <img className="mainBoxHeaderIcon" src="/icons/cristoRedentor.png"/>
            <h2 className="mainBoxHeaderTitle">Rio de Janeiro</h2>
            <h4 className="mainBoxHeaderSubtitle">5 dias / 4 noches</h4>
          </header>
          <footer className="mainBoxFooter">
            <p className="mainBoxFooterBody">
              <span>Entre el mar y los morros, Rio de Janeiro es un destino de tarjeta postal para turistas de todas partes del mundo.</span>
            </p>
            <p className="mainBoxFooterBody">Relajate en sus largas playas de arena blanca y aguas transparentes. Disfruta las vistas desde el Corcovado y el Pan de Azúcar, además de conectarte con la cultura local en barrios como Urca y Santa Teresa. Y si te gusta el fútbol, ¡no podés perderte una visita al Maracanã!</p>
            <p className="mainBoxFooterBody">¿Qué te parece andar en bicicleta sintiendo la brisa del mar en la cara? Las principales ciclovías van desde desde Marina da Glória y Centro hasta la zona Sul. 
            También podés optar por el subte, contás con estaciones en Zona Sul, Centro e una en Barra.</p>
          </footer>
          <button className="mainBoxButton">
            Reservar
          </button>
        </article>
        <div className="mainAside"/>
        <h1 className="mainLetter">B</h1>
      </main>
      <section className="interest">
        <h3 className="interestTitle">Tambien puede interesarte</h3>
        <div className="interestCarousel">
          {
            places.map( (el) => {
              return <div className="interestCarouselItem" key={el.name}>
                <header className="interestCarouselItemHeader" style={{ backgroundImage: `url(${el.image})`
                }}>
                  <span className="interestCarouselItemHeaderTag">
                    <h3>${el.price}</h3>
                    <small>USD</small>
                  </span>
                </header>
                <footer className="interestCarouselItemFooter">
                  <h4 className="interestCarouselItemFooterTitle">{el.name}</h4>
                </footer>
              </div>
            })
          }
        </div>
        <footer lassName="interestFooter">
          <h6>Ver mas</h6>
        </footer>
      </section>
    </>
  )
}

export default App