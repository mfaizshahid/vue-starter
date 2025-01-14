import moment from "moment";

const getEmailValidatorRegex = (): RegExp => {
  return /^(([^<>()#$%&*{}~=[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
};

const getPasswordValidatorRegex = (): RegExp => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@~`$!#^()_\-=+%*?&])[A-Za-z\d@~`$!#^()_\-=+%*?&]{3,16}$/;
};

/**
 * Return initials of name
 * @param name
 */
const getNameInitials = (name: string): string => {
  const parts = name.split(" ");
  let initials = "";
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials += parts[i][0];
    }
  }
  return initials;
}

const constructImageUrl = (icon: unknown) => {
  return new URL(icon as string, import.meta.url).href
}

/**
 * Format date
 * @param value
 */
export function dateFormat(value: string): string {
  return moment(value).format("DD/MM/YYYY LT");
}

/**
 * Function to open link in new window
 */
const openLinkInNewWindow = (link: string) => {
  window.open(link, "_blank");
}

/**
 * Function to generate random number
 */
const getRandomNumberBetween = (min: number = 5, max: number = 5000): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  getEmailValidatorRegex,
  getPasswordValidatorRegex,
  getNameInitials,
  constructImageUrl,
  dateFormat,
  openLinkInNewWindow,
  getRandomNumberBetween
};
