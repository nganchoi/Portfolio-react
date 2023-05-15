import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            皆さん、こんにちは。私の名前は
            <strong class="turquoise">NGAN</strong>
            で 、ベトナムから来ました。
            <br />
            <strong class="turquoise">_ 2017/07:</strong>{" "}
            ベトナムで教育専攻の大学を卒業し、その後、2年間専門分野で働いた後、自分にとって新しい方向を見つけたいと思いました。
            <br />
            <strong class="turquoise">- 2021/12/01:</strong>{" "}
            仕事と勉強のために日本に来ることを選びました。
            <br />
            <strong class="turquoise">- 2022/07:</strong>{" "}
            日本語能力試験N3の資格を取得しました。
            <br />
            <strong class="turquoise">- 2022/12:</strong>{" "}
            私はITに非常に興味があり、自分に合った仕事を見つけたいので、MINDX
            TECHNOLOGY SCHOOLでオンラインコースを受講し始めました。
            <br />
            また、UDEMYのいくつかのコースにも参加して、知識を広げています。
            学びながら働く時間は本当に厳しいですが、多くの経験を積むことができ、自分が好きなことをするために十分な勇気と忍耐力があると思います。
            現在は、経験をさらに積むために仕事を探しています。どうかよろしくお願いします。
          </p>
          <p style={{ textAlign: "justify" }}>
            私の
            <strong class="turquoise">趣味</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              プログラム & デザイン
            </li>
            <li className="about-activity">
              <ImPointRight /> 絵を描く
            </li>
            <li className="about-activity">
              <ImPointRight /> 写真を撮る
            </li>
            <li className="about-activity">
              <ImPointRight /> ビデオ作成
            </li>
          </ul>

          <p className="turquoise">
            「違いを生み出すものを作り上げることを目指して努力しています。」!{" "}
          </p>
          <footer className="blockquote-footer">Ngan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
