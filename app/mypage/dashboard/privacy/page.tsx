import React from 'react';

const page = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5 h-[calc(100vh-53px)] overflow-x-scroll">
      <h2 className="text-h2">캐치룸 개인정보처리방침</h2>
      <p>
        캐치룸은 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고
        이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과
        같이 개인정보처리방침을 수립 • 공개합니다.
        <br />
        <br />
        회사는 개인정보 처리방침을 통해 고객이 제공한 개인정보가 어떠한 용도와
        방식으로 이용되며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지
        알려드립니다. <br />
        <br />
        개인정보처리방침은 관련 법률 및 지침의 변경, 회사 내부 정책의 변경
        등으로 수시로 변경될 수 있으며, 개정하는 경우 변경 사항에 대하여 서비스
        화면에 게시하거나 고객에게 고지하겠습니다.
      </p>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">1. 개인정보 수집 항목 및 이용 목적</h3>
        <div>
          1. 회사의 서비스 이용 과정에서 아래 정보가 자동 생성되어 수집될 수
          있습니다. - 서비스 이용기록, 접속 로그, IP 정보, 쿠키, 불법 및 부정
          이용기록(비정상적 접근), 모바일 기기정보 (모델명, 이동통신사 정보,
          OS정보, 화면사이즈, 언어 및 국가정보, 광고 ID, 디바이스 식별정보 등)
          <br />
          <br />
          2. 캐치룸 서비스 회원가입을 위해 아이디(이메일), 비밀번호(이메일
          회원만 수집), 닉네임, 휴대폰 번호를 수집하고 있으며 별도 서비스 이용
          시 개인정보를 수집할 경우 반드시 동의를 받고 개인정보를 수집하고
          있습니다. <br />
          <br />
          3. 캐치룸 서비스 이용과정에서 서비스이용기록, 접속로그, IP주소 등의
          정보가 자동으로 생성되어 수집될 수 있습니다. <br />
          <br />
          4. 캐치룸 서비스에서 수집한 이용자 개인정보는 서비스 가입, 계약의 이행
          및 서비스 제공, 상담・불만・민원처리 등 서비스 제공을 위해 필요한
          목적으로만 처리합니다. 개인정보 수집 시 반드시 이용자에게 처리 목적을
          고지하여 동의를 받고 있습니다. <br />
          <br />
          5. 이용자는 언제든지 등록되어 있는 본인의 개인정보를 열람하거나
          정정하실 수 있습니다. 개인정보 열람 및 정정을 하고자 할 경우에는
          마이페이지에서 직접 열람 또는 정정하거나, 개인정보보호책임자 및
          담당자에게 서면, 전화 또는 E-mail로 연락하시면 지체 없이
          조치하겠습니다. <br />
          <br />
          6. 이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기
          전까지 당해 개인 정보를 이용 또는 제공하지 않습니다. 잘못된 개인정보를
          제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이
          통지하여 정정하도록 조치하겠습니다. <br />
          <br />
          7. 회사가 개인정보를 수집하는 경우에는 반드시 사전에 이용자에게 해당
          사실을 알리고 동의를 구하고 있으며 수집하는 개인정보의 이용 목적,
          항목, 보유기간은 다음과 같습니다.
        </div>
        <div className="w-full overflow-x-scroll">
          <table className="border border-border-sub w-[960px]">
            <thead className="border border-border-sub bg-surface-gray">
              <tr className="border border-border-sub ">
                <th className="border border-border-sub w-20 p-5">분류</th>
                <th className="border border-border-sub w-52 p-5">
                  수집・이용동의 목적
                </th>
                <th className="border border-border-sub w-52 p-5">항목</th>
                <th className="border border-border-sub w-52 p-5">
                  보유・이용기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border-sub text-center h-96 align-top p-5">
                  필수정보
                </td>
                <td className="border border-border-sub p-5 align-top">
                  회원가입, 서비스 이용, 부정 거래 기록 확인, 본인 여부 확인,
                  판매 및 구매한 숙박권 야놀자 앱내 소유권한 변경, 민원처리 등
                  소비자 분쟁해결
                </td>
                <td className="border border-border-sub p-5 align-top">
                  [회원가입 시] 휴대전화번호, 이메일, 이름, 생년월일,
                  비밀번호(이메일로 가입 시), 닉네임
                  <br />
                  [SNS가입 시] 휴대전화번호, 이메일, 이름 (카카오: 이메일)
                  <br />
                  [판매 · 구매 시] - 숙박권 예약자 변경시: 성명, 생년월일,
                  연락처(이메일/휴대폰) - 여행상품 대금결제 및 정산시: 성명,
                  카드사명, 신용카드번호, 승인번호, 계좌번호,
                  연락처(이메일/휴대폰) - 예약자와 방문자가 다를 경우: 방문자의
                  이름, 휴대폰 번호 - 예치금 전송 및 현금환불시: 계좌번호 및
                  예금주
                  <br />
                  [고객 상담 시] - 상담내용 및 상담에 필요한 개인정보 - 앱 내
                  채팅 기능을 사용한 채팅 내용
                </td>
                <td className="border border-border-sub p-5 align-top">
                  회원 탈퇴 시 상담 등 민원처리, 정산 및 환불 처리를 위해 30일
                  후 삭제
                  <br />
                  이벤트 혜택 수령 시 부정이용방지 목적으로 (일방향
                  암호화된)휴대폰번호를 혜택 제공일로부터 1년 보관 후 삭제
                  <br />
                  관계법령에 따라 보존할 필요가 있는 경우 해당 법령에서 요구하는
                  기한까지 보관 (예: 구매 회원의 경우 5년간, IP의 경우 3개월)
                </td>
              </tr>
              <tr>
                <td className="border border-border-sub text-center p-5 align-top">
                  선택정보
                </td>
                <td className="border border-border-sub p-5 align-top">
                  개인맞춤형 상품∙서비스 혜택에 관한 정보제공,
                  통계∙분석∙이용내역 정보와의 결합 및 분석, 회사 또는 기타
                  광고주의 요청에 따른 정보∙안내(프로모션∙이벤트)전송
                </td>
                <td className="border border-border-sub p-5 align-top">
                  예약내역(예약일시, 결제금액, 업체명), 디바이스 ID, 휴대폰
                  번호, 서비스이용기록, IP주소, 접속로그, Cookie, 광고식별자,
                  단말기 OS와 버전, 단말기 모델명, 브라우저 버전, 예약자 및
                  구매자 정보(이름, 휴대폰 번호, 생년월일, 이메일 주소), 방문자
                  정보(이름, 휴대폰 번호), 상담내용 및 상담에 필요한 개인정보
                </td>
                <td className="border border-border-sub p-5 align-top">
                  동의 철회시, 이용종료일 도래 시까지
                </td>
              </tr>
              <tr>
                <td className="border border-border-sub text-center p-5 align-top">
                  필수정보
                </td>
                <td className="border border-border-sub p-5 align-top">
                  [예약∙구매시] 공통 - 예약내역(예약일시, 결제금액, 업체명)
                  예약자 및 구매자 - 이름, 휴대폰 번호, (필요한 서비스의
                  경우)생년월일 예약자와 방문자가 다른 경우 - 방문자 및 탑승자의
                  이름, 휴대폰 번호, (필요한 서비스의 경우)생년월일 예약확인서
                  발급 시 - 예약자의 이메일 주소
                  <br />
                  [현금 환불 요청 시] ∙ 계좌번호 및 예금주명
                  <br />
                  [고객상담 시] ∙ 상담내용 및 상담에 필요한 개인정보
                </td>
                <td className="border border-border-sub p-5 align-top">
                  이용종료일로부터 상담 등 민원처리, 정산 및 환불 처리를 위해
                  30일 후 삭제
                  <br />
                  관계법령에 따라 보존할 필요가 있는 경우 해당 법령에서 요구하는
                  기한까지 보관 (예: 구매 회원의 경우 5년간, IP의 경우 3개월)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">2. 개인정보 수집 방법 및 동의</h3>
        <div>
          1. 개인정보 수집 방법
          <br />
          회사가 개인정보를 수집하는 경우에는 반드시 사전에 이용자에게 해당
          사실을 알리고 동의를 구하고 있으며, 아래와 같은 방법을 통해 개인정보를
          수집합니다.
          <br />
          <br />
          <div className="pl-3">
            a. 홈페이지 회원가입 및 서비스 이용 과정에서 이용자가 개인정보
            수집에 대해 동의를 하고 직접 정보를 입력하는 경우 <br />
            <br />
            b. 야놀자(이하 ‘제휴기업’)를 포함한 제휴 서비스 또는 단체 등으로부터
            개인정보를 제공받는 경우 <br />
            <br />
            c. 고객센터를 통한 상담 과정에서 웹페이지, 앱, 메일, 팩스, 전화 등을
            통하는 경우 <br />
            <br />
            d. 온·오프라인에서 진행되는 이벤트·행사 등을 통한 경우 <br />
            <br />
          </div>
          2. 개인정보 수집 동의
          <br />
          회사는 이용자께서 회사의 동의문 또는 이용약관의 내용에 대해 ‘동의함’
          또는 ‘동의하지 않음’을 클릭할 수 있는 절차를 마련하여 ‘동의함’을
          클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다. 단, 회사는 다음 각
          호의 어느 하나에 해당하는 경우에는 법령에 따라 이와 같은 동의 없이
          이용자의 개인정보를 수집·이용할 수 있습니다.
          <br />
          <br />
          <div className="pl-3">
            a. 정보통신서비스의 제공에 관한 계약을 이행하기 위하여 필요한
            개인정보로서 경제적·기술적인 사유로 통상적인 동의를 받는 것이
            뚜렷하게 곤란한 경우 <br />
            <br />
            b. 정보통신서비스 제공에 따른 요금정산을 위하여 필요한 경우 <br />
            <br />
            c. 수집 목적과 합리적인 관련성이 있고 정보주체에게 불이익이 발생하지
            않으며 안전성 확보 조치를 적용한 경우 <br />
            <br />
            d. 그 밖에 법률에 특별한 규정이 있는 경우
          </div>
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">3. 개인정보의 파기</h3>
        <div>
          1. 회사는 이용자가 동의를 철회하거나 개인정보 보유기간의 경과,
          처리목적을 달성 할 경우 지체없이 해당 개인정보를 파기합니다. <br />
          <br />
          <div className="pl-3">
            a. 파기 절차
            <br />
            회원이 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로
            옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한
            정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후
            파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가
            아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다. <br />
            <br />
            b. 파기 방법
            <br />
            종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고,
            전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
            방법을 사용하여 삭제합니다. 신용카드 정보의 경우, 결제 시점까지
            암호화되어 관리된 후, 결재 및 취소 시에 바로 영구 삭제됩니다. 회사는
            이용자가 동의를 철회하거나 개인정보 보유기간의 경과, 처리목적을 달성
            할 경우 지체없이 해당 개인정보를 파기합니다. <br />
            <br />
          </div>
          2. 회사의 개인정보 보호 정책에 따라 3년간 서비스를 이용하지 않은
          장기미이용 회원의 개인정보를 파기하여 관리하고 있습니다. 이 회원의
          개인정보는 즉시 탈퇴 처리되며, 대상자에게 안내는 탈퇴 처리일 기준으로
          최소 30일 이전과 탈퇴 처리 후 두 번에 걸쳐 이메일로 전송됩니다. 단,
          회원가입 시 장기 미접속시에도 계정 유지를 선택한 회원은 장기미이용
          회원이 되더라도 회원이 직접 탈퇴 신청할 때까지 개인정보를 보관합니다.
          <br />
          <br />
          3. 이용자로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
          달성되었음에도 불구하고 법령에 따라 개인정보를 일정기간 보관해야 하는
          경우, 해당 기간 동안 법령의 규정에 따라 개인정보를 별도 분리
          보관합니다.
          <br />
          <br />
          <div className="w-full overflow-x-scroll">
            <table className="w-[960px]">
              <thead className=" bg-surface-gray">
                <tr className="border border-border-sub  p-5">
                  <th className="border border-border-sub p-5">보유 정보</th>
                  <th className="border border-border-sub p-5">보유 기간</th>
                  <th className="border border-border-sub p-5">근거 법령</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    계약 또는 청약철회 등에 관한 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    5년
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </td>
                </tr>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    대금결제 및 재화 등의 공급에 관한 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    5년
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </td>
                </tr>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    소비자의 불만 또는 분쟁처리에 관한 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    3년
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </td>
                </tr>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    표시∙광고에 관한 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    6개월
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    전자상거래 등에서의 소비자보호에 관한 법률
                  </td>
                </tr>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    웹사이트 방문 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    3개월
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    통신비밀보호법
                  </td>
                </tr>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    전자금융거래에 관한 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    5년
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    전자금융거래법
                  </td>
                </tr>
                <tr>
                  <td className="border border-border-sub p-5 align-top">
                    고객확인 및 의심거래보고 등에 관한 기록
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    5년
                  </td>
                  <td className="border border-border-sub p-5 align-top">
                    특정 금융거래정보의 보고 및 이용 등에 관한 법률
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">
          4. 목적 외 사용 및 제3자에 대한 제공 및 공유
        </h3>
        <div>
          1. 회사는 회원의 개인정보를 「개인정보의 수집목적 및 이용목적」에서
          고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는
          타기업, 기관에 제공하지 않습니다. 다만, 다음의 예외사항에 해당하는
          경우에는 제공 받는 자, 제공목적, 제공정보 항목, 이용 및 보유기간을
          회원에게 고지하여 동의를 구합니다. <br />
          <br />
          <div className="pl-3">
            a. 양질의 서비스 제공을 위해 이용자의 개인정보를 협력업체와 공유할
            필요가 있는 경우 <br />
            <br />
            b. 관계법령에 의하여 수사상의 목적으로 관계기관으로부터의 요구가
            있을 경우 <br />
            <br />
            c. 통계작성, 학술연구나 시장조사를 위하여 특정 개인을 식별할 수 없는
            형태로 광고주 협력사나 연구단체 등에 제공하는 경우 <br />
            <br />
            d. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우 <br />
            <br />
            e. 그러나 예외 사항에서도 관계법령에 의하거나 수사기관의 요청에 의해
            정보를 제공한 경우에는 이를 당사자에게 고지하는 것을 원칙으로
            운영하고 있습니다.
          </div>
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">5. 개인정보 보호책임자 및 권익침해 구제방법</h3>
        <div>
          1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
          처리와 관련한 이용자의 불만처리, 개인정보 열람청구 접수 및 처리,
          피해구제 등을 위하여 개인정보 보호책임자 및 개인정보 보호 담당부서를
          지정하고 있으며 기타 개인정보 침해에 관한 상담이 필요한 경우에는
          국가기관으로 문의하실 수 있습니다.
          <br />
          <br />
          2. 회사는 서비스 개인정보의 처리에 관한 업무를 총괄하는
          개인정보보호책임자를 지정하고 있습니다.
          <br />
          <br />
          <div className="pl-3">
            a. 개인정보 보호책임자: 김캐치(CPO) <br />
            <br />
            b. 개인정보 보호 담당부서: 개인정보팀(privacy@catchroom.com) <br />
            <br />
            c. 캐치룸 서비스 이용 시 발생하는 모든 개인정보보호 관련 문의와
            불만사항은 개인정보 보호책임자 또는 고객센터로 문의해주시면 됩니다.{' '}
            <br />
            <br />
            d. 캐치룸 고객센터: 02-4989-4989 , team4989@catchroom.com <br />
            <br />
            e. 개인정보 관련 신고나 상담이 필요한 경우 국가기관의 문의하여
            도움을 받으실 수 있습니다. <br />
            <br />
            <div className="pl-3">
              ⅰ. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
              ([www.kopico.go.kr](https://www.kopico.go.kr/main/main.do)) <br />
              <br />
              ⅱ. 개인정보침해신고센터 : (국번없이) 118
              ([privacy.kisa.or.kr](https://privacy.kisa.or.kr/main.do)) <br />
              <br />
              ⅲ. 대검찰청 : (국번없이) 1301
              ([www.spo.go.kr](https://www.spo.go.kr/site/spo/main.do)) <br />
              <br />
              ⅳ. 경찰청 : (국번없이) 182
              ([ecrm.cyber.go.kr](https://ecrm.police.go.kr/minwon/main))
            </div>
          </div>
        </div>
      </div>
      <div id="todiv" className="flex flex-col gap-3">
        <h3 className="text-h3">
          6. 개인정보 자동수집 장치의 설치∙운영 및 그 거부에 관한 사항
        </h3>
        <div>
          1. 쿠키(cookie)는 웹사이트가 이용자의 브라우저(엣지, 크롬, 파이어폭스,
          기타 모바일 브라우저)로 전송하는 소량의 정보입니다. 회사는 이용자의
          정보를 저장하고 수시로 찾아내는 쿠키(cookie)를 사용합니다. 쿠키는
          이용자의 컴퓨터 또는 모바일 기기는 식별하지만 이용자를 개인적으로
          식별하지는 않습니다. <br />
          <br />
          2. 회사는 다음과 같은 목적으로 쿠키(cookie)를 사용합니다. <br />
          <br />
          <div className="pl-3">
            a. 쿠키(cookie)에 광고식별자, 디바이스 ID를 적재해 기기별로 차별화된
            정보를 제공 <br />
            <br />
            b. 회원과 비회원의 접속빈도 또는 머문 시간 등을 분석하여 이용자의
            취향과 관심분야를 파악하여 타겟(target) 마케팅에 활용 <br />
            <br />
            c. 클릭한 정보들에 대한 세부정보와 관심 있게 둘러본 정보들에 대한
            자취를 분석하여 다음 번 접속 때 개인 맞춤 서비스를 제공 <br />
            <br />
            d. 회원들의 습관을 분석하여 서비스 개편 등의 척도로 이용 <br />
            <br />
          </div>
          3. 이용자는 쿠키에 대한 선택권이 있으며 아래 안내 방법으로 쿠키의
          저장을 거부할 수 있습니다. 다만, 쿠키의 저장을 거부할 경우에는 일부
          서비스 이용에 어려움이 있을 수 있습니다. 쿠키 수집 거부를 원하실 경우
          아래 안내를 확인해주세요. <br />
          <br />
          <div className="pl-3">
            a. 웹 브라우저 <br />
            <br />
            <div className="pl-3">
              ⅰ. Edge: 설정 → 사이트 권한 → 쿠키 및 사이트 데이터 <br />
              <br />
              ⅱ. Chrome: 메뉴 → 설정 → 개인정보 및 보안 → 쿠키 <br />
              <br />
              ⅲ. Safari: Safari → 개인정보 보호 → 쿠키 및 웹 사이트 데이터{' '}
              <br />
              <br />
            </div>
          </div>
          <div className="pl-3">
            b. 모바일 <br />
            <br />
            <div className="pl-3">
              ⅰ. Android: 홈 → 설정 → Google → 광고 → 광고 맞춤설정 선택 해제
              (ON)
              <br />
              <br />
              ⅱ. iPhone: 홈 → 설정 → 개인 정보 보호 → 추적 → 앱이 추적을
              요청하도록 허용 (OFF)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
