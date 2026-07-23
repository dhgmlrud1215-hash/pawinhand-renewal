const sponsorQuestions = [
  {
    question: "나의 후원내역을 확인하고 싶어요.",
    answer: (
      <>
        <p>
          유기동물에 대한 따뜻한 마음으로 포인핸드의 활동을 지지해주셔서
          감사드립니다.
          <br />
          아래 링크를 통해 후원자님의 결제 내역을 확인할 수 있습니다.
        </p>
        <a
          href="https://www.ihappynanum.com/"
          target="_blank"
          rel="noreferrer"
        >
          해피나눔 후원내역
        </a>
      </>
    ),
  },
  {
    question: "포인핸드 기부금영수증 발행이 가능한가요?",
    answer: (
      <>
        <p>
          포인핸드는 비영리단체가 아닌 사회적 기업으로 운영되고 있어
          기부금영수증 발행이 불가한 점 양해 부탁드립니다.
          <br />
          연말정산 증빙용이 아닌 기타 내역 확인용 서류는 별도로 발행이
          가능하오니 필요한 경우 아래 연락처로 문의 부탁드립니다.
        </p>
        <ContactLinks />
        <p className="sponsor-qna-note">
          * 나의 후원 내역 조회에서 확인할 수 있는 ‘기부금 다운로드’ 파일은
          단순 확인용으로 법적 증빙이 어려운 점 참고 부탁드립니다.
        </p>
      </>
    ),
  },
  {
    question: "후원금액, 결제정보, 주소지 등을 변경하고 싶어요.",
    answer: (
      <>
        <p>
          후원 시 등록한 후원금액, 결제수단 정보, 주소지 등 정보 변경을
          원하실 경우 아래 연락처로 성함, 연락처와 문의내용을 남겨주세요.
        </p>
        <ContactLinks />
      </>
    ),
  },
  {
    question: "이번 달 후원금이 출금되지 않았어요. 재출금이 가능한가요?",
    answer: (
      <>
        <p>
          당월 후원금이 결제되지 않은 경우 등록하신 결제수단의 오류일
          가능성이 있습니다. 결제정보를 확인하신 뒤 아래 연락처로 문의해
          주시면 재출금을 신청할 수 있도록 안내드리겠습니다.
        </p>
        <ContactLinks />
      </>
    ),
  },
  {
    question: "정기후원을 중단하고 싶어요.",
    answer: (
      <>
        <p>
          정기후원 중단을 원하실 경우 아래 연락처로 후원자님의 성함,
          연락처와 문의내용을 남겨주세요. 확인 후 안전하게 처리해
          드리겠습니다.
        </p>
        <ContactLinks />
      </>
    ),
  },
];

function ContactLinks() {
  return (
    <div className="sponsor-qna-contact">
      <p>
        [포인핸드 카카오톡 채널]{" "}
        <a
          href="https://pf.kakao.com/_vxaxbUxl"
          target="_blank"
          rel="noreferrer"
        >
          포인핸드 PAWINHAND
        </a>
      </p>
      <p>
        [포인핸드 이메일 주소]{" "}
        <a href="mailto:pawinhand@naver.com">pawinhand@naver.com</a>
      </p>
    </div>
  );
}

function Sponsor() {
  return (
    <main className="sponsor-page">
      <img
        className="sponsor-image"
        src="/images/quick/sponsor.jpeg"
        alt="포인핸드 후원 안내"
      />

      <section className="sponsor-qna-section" aria-label="후원 자주 묻는 질문">
        <a
          className="sponsor-cta"
          href="https://www.ihappynanum.com/Nanum/B/S88ZA0FJDH"
          target="_blank"
          rel="noreferrer"
        >
          포인핸드 후원하기
        </a>

        <div className="sponsor-qna-list">
          {sponsorQuestions.map(({ question, answer }, index) => (
            <details
              className="sponsor-qna-item"
              key={question}
              open={index === 0}
            >
              <summary>
                <span>{question}</span>
                <span className="sponsor-qna-arrow" aria-hidden="true" />
              </summary>
              <div className="sponsor-qna-answer">{answer}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Sponsor;
