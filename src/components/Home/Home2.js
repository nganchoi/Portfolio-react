import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/iconavatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="turquoise"> 自己紹介します</span>
            </h1>
            <p className="home-about-body">
              私について
              ベトナムの教育専攻大学を卒業して、国際学校で2年間働いた後、私は世界をもっと知りたいと思い、日本を選びました。私は今までに日本に3年近く滞在し、仕事と並行して日本語を勉強して、知識を補充し、人々とコミュニケーションを取ることができました。しかし、私の中でずっとプログラマーになる夢がありました。この夢を実現する旅は本当に困難でしたが、私は常に自分自身に、もっと努力しなければならないと思い、常に前進するように心がけてきました。私は自分が何をしたいのかを理解し、これを実現するために一歩一歩進んでいます。この分野の私の知識を実践する仕事が欲しいと思っています。皆さんの助けが必要です！
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>私を見つけてください</h1>
            <p>
              <span className="turquoise">接続</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nganchoi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ngocngan.nguyen.7739"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://youtube.com/@nganchoichoi-cuocsongnhatb4872"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
