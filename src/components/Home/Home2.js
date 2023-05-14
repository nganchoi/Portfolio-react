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
              <h2>私について</h2>
              <br></br>
              ベトナムの教育専攻大学を卒業後、国際学校で2年間働いた経験を経て、世界をもっと知りたいという思いから日本にやってきました。今までに3年近く日本に滞在し、仕事と並行して日本語を勉強し、自分の知識を補充し、人々とコミュニケーションを取ることができました。しかし、私の中にはずっとプログラマーになる夢がありました。この夢を実現するためには、本当に困難な道のりでしたが、常に自分に対して「もっと努力しなければならない」と思い、前進し続けました。自分が何をしたいのかを理解し、一歩一歩進んでいくことで、その夢を実現するために頑張っています。
              <br></br>
              この分野での実践的な仕事に携わることができる機会を求めています。そのためには皆さんの助けが必要だと思っています。私は熱心でコミュニケーション能力にも自信があります。この分野において必要とされるスキルを身につけるため、学習意欲も十分にあります。私にとって、新しい挑戦や成長の機会を得ることが重要であり、皆さんと一緒に仕事ができることを楽しみにしています。
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
            <h1>Find Me!</h1>
            <p>
              <span className="turquoise">Connect</span>
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
