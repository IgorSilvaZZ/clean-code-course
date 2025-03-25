// Nomenclatura de variáveis

const categories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getData(req, res) {
  const gitHubUserName = String(req.query.username);

  if (!gitHubUserName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const fetchFollowersResponse = await fetch(
    `https://api.github.com/users/${gitHubUserName}`
  );

  if (fetchFollowersResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${gitHubUserName}" not found`,
    });
  }

  const githubUserData = await fetchFollowersResponse.json();

  const categoriesSorted = categories.sort((a, b) => b.followers - a.followers);

  const userCategory = categoriesSorted.find(
    (category) => githubUserData.followers > category.followers
  );

  const result = {
    gitHubUserName,
    category: userCategory.title,
  };

  return result;
}

getData(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
