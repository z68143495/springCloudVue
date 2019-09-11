/**
 * Created by tm on 2019/7/2.
 */

const required = { required: true, message: '此为必填项', trigger: 'blur' }  // 必填校验
const number = { type: 'number', message: '必须为数字',trigger: 'change'}  // 数字校验

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export default {
  required,
  number
}

