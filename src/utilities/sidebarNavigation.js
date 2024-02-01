import { MdDashboard } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdSavings, MdCandlestickChart } from "react-icons/md";

export const sidebarNavigation = [
    {
        title: "Dashboard",
        image: <MdDashboard size={25} />,
        link: "/dashboard"
    },
    {
        title: "Income",
        image: <FaHeart size={25} />,
        link: "/dashboard/income"
    },
    {
        title: "Expense",
        image: <FaMoneyBill1Wave size={25} />,
        link: "/dashboard/expense"
    },
    {
        title: "Savings",
        image: <MdSavings size={25} />,
        link: "/dashboard/savings"
    },
    {
        title: "Investment",
        image: <MdCandlestickChart size={25} />,
        link: "/dashboard/investment"
    }
]