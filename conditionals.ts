// Negações dentro de ifs

const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {
  console.log({ isUserYoungerThan18Years, doesUserLivesOutsideBrazil });
}

// Early return vs else.
function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true };
  }

  return user.age >= 18;
}
