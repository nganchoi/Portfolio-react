import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Projects/Weather.png";
import CoffeeShop from "../../Assets/Projects/CoffeeShop.png";
import Crwn from "../../Assets/Projects/Crwn.png";
import Todolist from "../../Assets/Projects/Todolist.png";
import RelaxBox from "../../Assets/Projects/RelaxBox.png";
import PigGame from "../../Assets/Projects/PigGame.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          最近の <strong className="turquoise">作品</strong>
        </h1>
        <p style={{ color: "white" }}>
          ここでは私が最近取り組んだプロジェクトをいくつか紹介します。
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crwn}
              isBlog={false}
              title="crwn-clothing"
              description="Crwn-clothingはReactで設計されたシンプルなショッピングウェブサイトで、名前による商品のフィルタリング、カートへの商品の追加、自己生成データとの接続機能が備わっています。支払いページ、登録、ログイン、およびGoogleデータベースに顧客情報を保存する機能もあります。"
              ghLink="https://github.com/nganchoi/crwn-clothing"
              demoLink="https://crwn-clothing-nganproject.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CoffeeShop}
              isBlog={false}
              title="Coffee-shop"
              description="このウェブサイトはHTMLとCSSで設計され、レストランの情報や画像を紹介しており、レストランとの直接的な連絡方法として電話番号やレストランの他のビジネスウェブサイトへのリンクがあります。店舗オーナーによるものです。"
              ghLink="https://github.com/nganchoi/Coffee-shop"
              demoLink="https://hanoicafe-fuk-jp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PigGame}
              isBlog={false}
              title="Pig-game"
              description="Pig-gameは、1人または2人でプレイできる小さな娯楽ゲームの機能を備えたJavaScriptで設計されています。ランダムにダイスを投げるボタンを押すことで、最初に100に到達した側が勝ちとなりますが、すぐに1が出た場合はポイントが0に戻ってしまいます。"
              ghLink="https://github.com/nganchoi/Pig-gameJS"
              demoLink="https://pig-game-jvnganchoi.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RelaxBox}
              isBlog={false}
              title="RelaxBox"
              description="Reactで書かれたRelaxboxは、登録やログイン時に一時的な顧客情報を保存するためにuseStateを使用し、ユーザーが後で書き留めることで、負の感情を解放するためのボックスとして機能します。感情は2分後に消えます。"
              ghLink="https://github.com/nganchoi/Relax-box"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather-web"
              description="このウェブサイトはReactで書かれておりopenweatherのAPIを使用して、APIに従って国別の天気を表示しています。"
              ghLink="https://github.com/nganchoi/weather-app-ms"
              demoLink="https://weather-web-appms.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Todolist"
              description="Reactで書かれたこのウェブサイトには、メモやスケジュールの機能があり、完了したら完了としてマークするか、カレンダーから削除することができます。"
              ghLink="https://github.com/nganchoi/Todolist-react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
