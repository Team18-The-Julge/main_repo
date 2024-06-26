// 숫자에 콤마를 추가하는 함수
export const formatNumber = (value: string) => {
  // 숫자 이외의 문자 제거, 선행하는 0 제거, 단 숫자가 0이거나 비어 있지 않은 경우를 제외
  const cleanNum = value.replace(/\D/g, '').replace(/^0+/, '') || '0';
  // 세 자리마다 콤마를 추가
  return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 전화번호에 하이픈를 추가하는 함수; toss/slash 참고
export function formatPhoneNumber(phoneNumber: string) {
  // 숫자만 포함된 문자열로 정제
  const digits = phoneNumber.replace(/\D/g, '');

  // 서울 국번(02)인지 확인
  const isSeoulNumber = digits.startsWith('02');
  const areaCodeEndIndex = isSeoulNumber ? 2 : 3;

  // 길이에 따라 포맷팅 조건 설정
  if (digits.length <= areaCodeEndIndex) {
    return digits;
  }
  if (digits.length <= areaCodeEndIndex + 4) {
    return `${digits.slice(0, areaCodeEndIndex)}-${digits.slice(areaCodeEndIndex)}`;
  }
  // eslint-disable-next-line max-len
  return `${digits.slice(0, areaCodeEndIndex)}-${digits.slice(areaCodeEndIndex, digits.length - 4)}-${digits.slice(digits.length - 4)}`;
}

// 정규식으로 모든 하이픈을 빈 문자열로 교체
export function removeHyphens(phoneNumber: string) {
  return phoneNumber.replace(/-/g, '');
}

// 콤마를 포함한 숫자 문자열을 number로 변경하는 함수
export const removeCommasNumber = (number: string) => {
  return parseInt(number.replace(/,/g, ''), 10);
};
