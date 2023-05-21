export const isNumber = (n) => {
  n = n.replaceAll(" ", "").replaceAll(",", ".").replaceAll("/", "");
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const isMailAddress = (n) => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/im;
  return !!n.match(regexEmail);
};

export const isPhoneNumber = (n) => {
  const regexPhoneNumber =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/im;
  return !!n.replaceAll(" ", "").match(regexPhoneNumber);
};

export const joinAbbreviations = (v) =>
  v.map((g) => g.split(" ")[0]).join(", ");

export function sortObjectsByName(objects) {
  objects.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1; // a should come before b
    } else if (nameA > nameB) {
      return 1; // b should come before a
    } else {
      return 0; // names are equal, maintain original order
    }
  });

  return objects;
}
