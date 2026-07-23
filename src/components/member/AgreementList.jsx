import { agreementData } from "../../data/memberData";

function AgreementList({ agreements, onChange, onToggleAll }) {
  const allChecked = agreementData.every(
    (agreement) => agreements[agreement.id]
  );

  return (
    <div className="agreement-section">
      <label className="agreement-all">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={onToggleAll}
        />
        <span>약관 전체 동의</span>
      </label>

      <div className="agreement-list">
        {agreementData.map((agreement) => (
          <label className="agreement-item" key={agreement.id}>
            <input
              type="checkbox"
              name={agreement.id}
              checked={agreements[agreement.id]}
              onChange={onChange}
            />

            <span>
              {agreement.required ? "[필수]" : "[선택]"} {agreement.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default AgreementList;