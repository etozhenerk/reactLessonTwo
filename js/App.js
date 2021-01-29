class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.section = `${props.section}-logo`;
  }
  render() {
    return <div className={this.section}></div>;
  }
}
class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.section = `${props.section}-phonelink`;
    this.href = props.href;
  }
  render() {
    return (
      <div className={this.section}>
        <a href={this.href}>+7(962)556-1234</a>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.section = `btn ${props.section}-btn`;
    this.text = props.text;
  }
  render() {
    return (
      <button className={this.section}>
        <span>{this.text}</span>
      </button>
    );
  }
}

class SliderItem extends React.Component {
  constructor(props){
    super(props);
    this.number = props.number;
    this.text = props.text;
    this.style = {
      backgroundImage: `url(./images/${this.number}.svg)`,
    }
  }
  render() {
    return (
      <div className="features-slider_item">
        <div className="features-img" style={this.style}></div>
        <div className="features-feature">{this.text}</div>
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return(
      <div className="features-slider">
      <div className="features-slider_items">
        <SliderItem number="1" text="Первое целевое преимущество"/>
        <SliderItem number="2" text="Второе целевое преимущество"/>
        <SliderItem number="3" text="Третье целевое преимущество"/>
        <SliderItem number="4" text="Четвертое целевое преимущество"/>
      </div>
      <button className="features-slider-arrow features-slider-prev">
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
        </svg>
      </button>
      <button className="features-slider-arrow features-slider-next">
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
        </svg>
      </button>
    </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="header">
            <a href="#">
              <Logo section="header" />
            </a>
            <a href="tel:888" className="header-phone"></a>
            <Phone section="header" href="tel:7(962)556-1234" />
          </div>
        </div>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="main">
            <h1 className="main-head">
              Заголовок c уникальным торговым предложение по системе 4U
            </h1>
            <div className="main-small">
              Описания предлжения компании. Сайт рыбатекст поможет дизайнеру,
              верстальщику,вебмастеру сгенерировать несколько абзацев более.
            </div>
            <Button section="main" text="Подробнее" />
          </div>
        </div>
      </main>
    );
  }
}

class Features extends React.Component {
  render() {
    return (
      <section className="features">
        <div className="wrapper">
          <div className="features-wrapper">
            <h2 className="features-head">
              Уникальный заголовок для преимущества компании
            </h2>
            <div className="features-subhead">О нас</div>
            <div className="features-description">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить.
            </div>
            <Slider/>
          </div>
        </div>
      </section>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="wrapper">
          <div className="contact-wrapper">
            <h2 className="contact-title">Остались вопросы?</h2>
            <div className="contact-description">
              Оставьте номер телефона, и мы перезвоним вам
            </div>
            <form action="../mailer.smart.php" className="contact-form">
              <input type="text" placeholder="Ваше имя" />
              <input typename="tel" placeholder="Телефон" />{" "}
              <input type="email" placeholder="E-mail" />
              <Button section="contact" text="Позвони мне" />
            </form>
            <div className="contact-personal">
              Я даю своё <a href="#">согласие</a> на обработку моих персональных
              данных.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <Logo section="footer" />
          <div className="footer-company">
            <span>© 2020 XXXcompany. Все права защищены.</span>
          </div>
          <a href="tel:888" className="footer-phone"></a>
          <div className="footer-websurfer">
            <span className="footer-websurfer_build">Сделано</span>
            <a href="#">Ваше имя</a>
          </div>
          <Phone section="footer" href="tel:888" />
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Features />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
