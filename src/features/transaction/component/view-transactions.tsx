import { Spinner } from "@/components/ui/spinner";
import { useTransactions } from "../api/get-transaction"
import { transactionColumns } from "./transaction-table/transaction-table-columns";
import { Transaction } from "@/types/api"
import { DataTable } from "@/components/data-table";


export const sampleTransactions: Transaction[] = [
    {
        id: "1",
        reference: "TXN-20250816-001",
        email: "john.doe@example.com",
        shopName: "TechWorld Ltd",
        phoneNumber: "+233201234567",
        status: "success",
        createdAt: "2025-08-15T14:20:00Z",
    },
    {
        id: "2",
        reference: "TXN-20250816-002",
        email: "jane.smith@example.com",
        shopName: "BookMart",
        phoneNumber: "+233509876543",
        status: "pending",
        createdAt: "2025-08-16T09:45:00Z",
    },
    {
        id: "3",
        reference: "TXN-20250816-003",
        email: "michael.owusu@example.com",
        shopName: "GadgetHub",
        phoneNumber: "+233245678901",
        status: "failed",
        createdAt: "2025-08-14T18:10:00Z",
    },
    {
        id: "4",
        reference: "TXN-20250816-004",
        email: "ama.koranteng@example.com",
        shopName: "Clothify",
        phoneNumber: "+233278654321",
        status: "success",
        createdAt: "2025-08-12T12:30:00Z",
    },
    {
        id: "5",
        reference: "TXN-20250816-005",
        email: "kwame.mensah@example.com",
        shopName: "Foodies Express",
        phoneNumber: "+233201112223",
        status: "success",
        createdAt: "2025-08-11T20:15:00Z",
    },
]






export const TransactionList = () => {


    const transactionQuery = useTransactions({});

    if (transactionQuery.isLoading) {
        return (
            <div className="flex flex-row min-h-screen justify-center items-center">
                <Spinner />
            </div>
        )
    }


    return (
        <div className="container w-full py-10">
            <DataTable columns={transactionColumns} data={sampleTransactions} />
        </div>
    )
}