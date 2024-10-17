import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-male.png";
import user_2 from "../../assets/user-female.png";
import user_3 from "../../assets/user-male.png";
import user_4 from "../../assets/user-female.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sailau Sanzhar</h3>
                  <span>KoreanEZ, KZ</span>
                </div>
              </div>
              <p>
                이 사이트는 한국어를 배우려는 외국인을 위해 체계적으로 구성된 학습 자료를 제공합니다. 
                문법, 어휘, 발음 등 각 학습 주제별로 레슨이 나누어져 있어, 단계별로 따라가기 쉽습니다. 
                초보자부터 고급 학습자까지 자신의 수준에 맞는 학습을 할 수 있는 점이 장점입니다.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mahmood Sara</h3>
                  <span>KoreanEZ, PK</span>
                </div>
              </div>
              <p>
                각 레슨은 한국어 문법과 어휘에 대한 상세한 설명을 제공하며, 
                실생활에서 사용할 수 있는 예문이 포함되어 있어 이해를 돕습니다. 
                영어로 한국어 문법을 설명하기 때문에, 영어에 익숙한 학습자들에게 특히 유용합니다. 
                예문을 통해 문법과 단어의 실제 사용법을 학습할 수 있는 것도 큰 장점입니다.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Khasanov Aizzhon</h3>
                  <span>KoreanEZ, RU</span>
                </div>
              </div>
              <p>
                많은 레슨과 자료가 무료로 제공되며, 
                유료로 구매할 수 있는 추가 자료도 있어 원하는 학습 방법에 따라 선택할 수 있습니다. 
                유료 콘텐츠를 구매하지 않아도 기본적인 한국어 학습을 
                진행할 수 있도록 충분한 자료가 제공됩니다.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Nguyen MoonMoon</h3>
                  <span>KoreanEZ, VNM</span>
                </div>
              </div>
              <p>
                사이트의 디자인은 다소 단순하고 기본적일 수 있지만, 
                이로 인해 불필요한 혼란 없이 학습에 집중할 수 있습니다. 
                직관적인 네비게이션 덕분에 처음 사용하는 사람도 쉽게 원하는 자료를 찾을 수 있습니다. 
                다만, 시각적으로 좀 더 매력적인 인터페이스가 추가된다면 사용자 경험이 개선될 수 있을 것입니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
