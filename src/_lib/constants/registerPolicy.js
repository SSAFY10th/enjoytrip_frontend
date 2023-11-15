const userIdRegex = /^[a-z0-9]{5,15}$/
export const validateUserId = (inputUserId) => {
  return userIdRegex.test(inputUserId)
}
export const invalidUserIdMessage =
  '아이디는 5글자 이상, 15글자 이하여야 하고 영문소문자와 숫자만 가능해요'

const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/
export const validateUsername = (inputNickname) => {
  return nicknameRegex.test(inputNickname)
}
export const invalidNicknameMessage =
  '닉네임은 2글자 이상, 8글자 이하여야 하며 특수문자는 사용할 수 없어요'

const emailRegex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
)
export const validateEmail = (email) => {
  return emailRegex.test(email)
}
export const invalidEmailMessage = '올바른 이메일 형식을 입력해주세요'

// 비밀번호는 8글자 이상이어야 하며 특수문자를 포함해야한다.
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
export const validatePassword = (inputPassword) => {
  return passwordRegex.test(inputPassword)
}
export const invalidPasswordMessage =
  '비밀번호는 8글자 이상, 15글자 이하여야 하며 숫자와 특수문자를 포함한 영문이어야 해요'
