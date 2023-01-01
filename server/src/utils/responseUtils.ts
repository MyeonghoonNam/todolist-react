export const createResponse = (data: unknown) => {
  return {
    data,
  };
};

export const createError = (details: unknown) => {
  return {
    details,
  };
};
