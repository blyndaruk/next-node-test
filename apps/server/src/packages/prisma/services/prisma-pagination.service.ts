import { PaginationCommon } from '@/packages/prisma/services/pagination.inteface';

const pages = (total: number, pagination: PaginationCommon) =>
  Math.ceil((total || 1) / pagination.take);

export const getPrismaPagination = (input: {
  sort: string;
  order: string;
  page: number;
  take: number;
}) => {
  const take = input.take;
  const skip = input.page > 1 ? (input.page - 1) * input.take : 0;
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

interface CreatePaginatedResponseArgs<T> {
  data: T;
  total: number;
  pagination: PaginationCommon;
}

export interface PaginatedSelect<T> {
  data: { select: T };
}

export const createPaginatedResponse = <T>({
  data,
  total,
  pagination,
}: CreatePaginatedResponseArgs<T>) => {
  return {
    data,
    pagination: {
      ...pagination,
      pages: pages(total, pagination),
      total,
    },
  };
};
