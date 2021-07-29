export const sendSuccessResponse = async ({ res, body = {} }) => {
  const response = {
    success: true,
    status: 200,
    body,
    error: {},
  };
  await res.status(200).json(response);
};

export const sendErrorResponse = async ({ res, status = 500, description }) => {
  const response = {
    success: false,
    status,
    body: {},
    error: {
      status,
      description: description || "Sorry! Some error has occured",
    },
  };
  await res.status(200).json(response);
};
export const sendServerErrorResponse = async ({ res }) => {
  const response = {
    success: false,
    status: 500,
    body: {},
    error: {
      status: 500,
      description: "Sorry! Some error has occured",
    },
  };
  await res.status(200).json(response);
};
