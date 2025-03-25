// Nomenclatura de variveis

// Evite diminutivos
const users = ["Igor", "Lucas", "Uesso"];

// Forma errada ❌
const filtered = users.filter((u) => {
  return u.startsWith("I");
});

// Forma certa ✅
const usersStartingWithLetterI = users.filter((user) => {
  return user.startsWith("I");
});

// ==================

// Evite nome genericos (data, response, list, args, params)

// Forma errada ❌
function getUsers() {
  const data = getUsersFromDatabase();

  return data;
}

// Forma certa ✅
function getUsers() {
  const users = getUsersFromDatabase();

  return users;
}
