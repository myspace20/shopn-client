import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { Transaction } from "@/types/api";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getTransactions = (page = 1): Promise<Transaction[]> => {
  return api.get("/transactions");
};

export const getTransactionsQueryOptions = ({ page }: { page?: number }) => {
  return queryOptions({
    queryKey: page ? ["products", { page }] : ["products"],
    queryFn: () => getTransactions(page),
  });
};

type UseTransactionOptions = {
  page?: number;
  queryConfig?: QueryConfig<typeof getTransactions>;
};

export const useTransactions = ({
  page,
  queryConfig,
}: UseTransactionOptions) => {
  return useQuery({
    ...getTransactionsQueryOptions({ page }),
    ...queryConfig,
  });
};
