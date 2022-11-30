import React from "react"
import styles from "./home.module.css"
import img1 from "../../assets/study-fun.jpg"
import img2 from "../../assets/explore-study.jpg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import { useSelector } from "react-redux"

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)
  const user = useSelector(state => state.auth.authData)

  return (
    <main className={styles.page}>
      <section className={styles["page-section"]}>
        <section className={styles["first-section"]}>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish
                  ? "Make learning awesome"
                  : "Làm việc học trở nên thú vị"}
              </h2>
              <p className={styles["banner-description"]}>
                {isLanguageEnglish
                  ? "Quizzly delivers engaging learning to billions"
                  : "QuizzKids cung cấp cách học hấp dẫn cho người dùng"}
              </p>
              <button className={styles["banner-button"]} style={{position: "relative", bottom: 18}}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Sign up for free"
                    : "Đăng ký miễn phí"}
                </a>
              </button>
            </div>
            <img src={img1} alt="" className={styles["banner-image"]} />
          </div>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish ? "Explore content" : "Khám phá nội dung"}
              </h2>
              <p className={styles["banner-description"]}>
                {isLanguageEnglish
                  ? "Explore content and join educator communities."
                  : "Cùng khám phá và tham gia vào cộng đồng giáo dục"}
              </p>
              <button className={styles["banner-button"]} style={{position: "relative", bottom: 18}}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Check public quizes"
                    : "Xem các bài quiz công khai"}
                </a>
              </button>
            </div>
            <img src={img2} alt="" className={styles["banner-image"]} />
          </div>
        </section>
        <section className={styles["second-section"]}>
          <div className={styles["section-background"]}></div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at school" : "QuizzKids tại trường học"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Engaging group and distance learning for teachers and students."
                  : "Thu hút học nhóm và học từ xa cho giáo viên và học sinh."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at work" : "QuidKids tại nơi làm việc"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Provide a place to learn and play together."
                  : "Cung cấp nơi để cùng học cùng chơi."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at home" : "QuizzKids tại nhà"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Learning Apps and games for family fun or home study."
                  : "Có thể tham gia cùng gia đình, người thân hoặc học tập tại nhà."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <h1>
            {isLanguageEnglish
              ? "How does QuizzKids work?"
              : "Quizkids hoạt động như nào?"}
          </h1>
          <div className={styles["card-container"]}>
            <div className={styles.card}>
              <img src={img3} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Create" : "Tạo quiz"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "It will only take a moment to create a quiz and a game."
                    : "Sẽ chỉ mất một chút thời gian để tạo quiz và một phòng chơi."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img4} alt="" />
              <div className={styles["card-body"]}>
                <h1>
                  {isLanguageEnglish
                    ? "Host or join"
                    : "Chủ trì hoặc tham gia"}
                </h1>
                <p>
                  {isLanguageEnglish
                    ? "Host a live game with questions on a big screen or share a game with remote players."
                    : "Tổ chức trò chơi trực tiếp với các câu hỏi trên màn hình lớn hoặc chia sẻ trò chơi với những người chơi từ xa."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img5} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Play" : "Chơi"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "Game on! Join a game with a PIN provided by the host and answer questions on your device."
                    : "Tiếp tục chơi! Tham gia chơi với mã PIN do người chủ trì cung cấp và trả lời các câu hỏi trên thiết bị của bạn."}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["card-button"]}>
            {isLanguageEnglish
              ? "Play QuizzKids to see how it works."
              : "Cùng chơi để thấy được nó hoạt động như nào."}{" "}
            &nbsp;
            <a href="/">
              {isLanguageEnglish
                ? "Explore our public quizes"
                : "Khám phá các bộ quiz công khai"}
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
