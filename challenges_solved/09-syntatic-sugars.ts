function getFirstFiveRatings(ratings) {
  //hasEnoughRatings =>  Tem avaliações suficientes
  const hasEnoughRatings = ratings.length >= 5;

  if (!hasEnoughRatings) {
    return false;
  }

  const topFiveRatings = ratings.slice(0, 5);

  return topFiveRatings;
}

function sumFirstFiveRatings(ratings) {
  const hasRatings = Boolean(ratings && ratings.length > 0);

  if (!hasRatings) {
    return { error: "ratings is required" };
  }

  const firstFiveRatings = getFirstFiveRatings(ratings);

  if (!firstFiveRatings) return { error: "there must be at least 5 ratings" };

  let ratingsSum = 0;

  // Poderia ser utilizado o reduce
  for (const rating of firstFiveRatings) {
    const ratingToNumber = Number(rating);

    ratingsSum += ratingToNumber;
  }

  const timestamp = Number(new Date());

  return { ratingsSum, created_at: timestamp };
}

const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];

sumFirstFiveRatings(appRatings);
