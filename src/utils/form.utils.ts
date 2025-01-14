import {utils} from "@/utils/";

const requiredRule =
  (message: string = "Field is required") =>
    (value: string) => {
      return value ? true : message;
    };
const emailFormatRule =
  (message: string = "Email is invalid") =>
    (value: string) => {
      const emailRegex = utils.getEmailValidatorRegex();
      return emailRegex.test(value) ? true : message;
    };

const minLengthRule =
  (
    message: string = "Value must be at least 8 characters",
    length: number = 8
  ) =>
    (value: string) => {
      return value.length >= length ? true : message;
    };

const maxLengthRule =
  (
    message: string = "Value must be at most 16 characters",
    length: number = 16
  ) =>
    (value: string) => {
      return value.length <= length ? true : message;
    };

const passwordFormatRule =
  (
    message: string = "'Password must contain at least one uppercase, one lowercase, one number and one special character'"
  ) =>
    (value: string) => {
      const passwordRegex = utils.getPasswordValidatorRegex();
      return passwordRegex.test(value) ? true : message;
    };

const rangeRule =
  (
    min: number = 5,
    max: number = 100,
    message: string = `Value must be between ${min} and ${max}`
  ) =>
    (value: number) => {
      return value >= min && value <= max ? true : message;
    };
export default {
  requiredRule,
  emailFormatRule,
  minLengthRule,
  maxLengthRule,
  passwordFormatRule,
  rangeRule
};
