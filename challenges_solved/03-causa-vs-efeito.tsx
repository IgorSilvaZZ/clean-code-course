// Causa vs Efeito
import { useEffect, useState } from "react";

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        github: "https://github.com/josepholiveira",
      },
    },
  };
}

export function UserProfile() {
  const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState<User>();

  function getUser() {
    setLoading(true);

    const fetchUserResponse = fetchUser();

    setUserData(fetchUserResponse.data.user);

    setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt='' />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  );
}
