// prisma pagination
export const prismaPaginationService = (input: {
  sort?: string;
  order?: string;
  page?: number;
  take?: number;
  total?: number;
}) => {
  const take = input.take;
  const skip = input.page > 1 ? (input.page - 1) * input.take : 0;
  const pages = (total: number) => Math.ceil((total || 1) / input.take);

  const sort = input.sort.split('.');
  const orderBy =
    sort.length > 1
      ? sort.length === 2
        ? {
            [sort[0]]: {
              [sort[1]]: input.order,
            },
          }
        : {
            [sort[0]]: {
              [sort[1]]: { [sort[2]]: input.order },
            },
          }
      : { [input.sort]: input.order };

  return { orderBy, take, skip, pages };
};
