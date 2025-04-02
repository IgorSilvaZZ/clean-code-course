function updateUserRoute(body, params) {
  const { id } = params;
  const { name, email, password } = body;

  updateUserController({
    body: { name, email, password },
    params: { id },
  });
}

function updateUserController({ body, params }) {
  userRepository.update({ body }, { params });
}

const userRepository = {
  update: ({ name, email, password }, { id }) => {},
};
