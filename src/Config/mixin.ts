export function parseDate(birthdate: string) {
    const date = new Date(birthdate);
    return `${
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
    }`;
  }