function App() {

  return (
    <>
      <header className="header">
        <img src="/header.jpg" className="headerBackground"/>
        <nav className="headerNav">
          <h3 className="headerNavLogo">RIVAS<span>TRAVEL</span></h3>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sapiente, dolorem a aspernatur voluptatum consectetur minima deleniti!
            </span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis totam nisi necessitatibus aspernatur magnam, quisquam maxime ab cum magni voluptate quis soluta qui facilis vel nulla accusantium illo quaerat tenetur?
            </span>
          </p>
          <ol className="headerInfoList">
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/plane.png'/>
              <small className="headerInfoListItemText">Sin escalas</small>
            </li>
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/taxi.png'/>
              <small className="headerInfoListItemText">Transporte</small>
            </li>
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/suitcase.png'/>
              <small className="headerInfoListItemText">23 KGs</small>
            </li>
            <li className="headerInfoListItem">
              <img className="headerInfoListItemImage" src='/icons/hotel.png'/>
              <small className="headerInfoListItemText">Hospedaje</small>
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
    </>
  )
}

export default App