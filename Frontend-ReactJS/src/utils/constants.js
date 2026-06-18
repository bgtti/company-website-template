/**
 * Input length requirements for forms
 * @readonly
 * @enum {object}
 */
export const INPUT_LENGTH = Object.freeze({
 name: {
  minValue: 1,
  maxValue: 200
 },
 email: {
  minValue: 6,
  maxValue: 320
 },
 occupation: {
  minValue: 0,
  maxValue: 200
 },
 subject: {
  minValue: 1,
  maxValue: 100
 },
 message: {
  minValue: 1,
  maxValue: 500
 },
 spamFilter: {
  minValue: 4,
  maxValue: 4
 }
})