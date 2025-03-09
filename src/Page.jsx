import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faEllipsisVertical, faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import LargeCard from "./Components/LargeCard";
import Chart from "./Components/Chart";
import Table from "./Components/Table";
import StatusBox from "./Components/StatusBox";
import TodoList from "./Components/TodoList";
import Greetings from "./Components/utils/greetings";
import Sidebar from "./Components/Sidebar";

const Page = () => {
  let balance = 106500;
  let spending = 4236;
  return (
    <div className="w-full flex max-w-[1520px] ">
      <div className="flex shrink-0">
            <Sidebar />
            </div>
    <div className="flex flex-col w-full flex-1 relative overflow-y-auto overflow-x-hidden ">
      {/* Header */}
      <div className="w-full sticky top-0 z-50 bg-slate-300">
        <Header />
      </div>

      {/* Main content */}
      <div className="full flex lg:flex-row flex-col gap-6 p-3 transition-all duration-300">
      <h2 className='text-[24px] font-bold text-gray-800 block md:hidden'><Greetings name="James" /></h2>
        {/* Left Column */}
        <div className="w-full flex flex-col gap-6 lg:w-9/12">
          {/* Small Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Card
              icon={<FontAwesomeIcon icon={faCreditCard} />}
              listIcon={<FontAwesomeIcon icon={faEllipsisVertical} />}
              title={`${balance.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}`}
              text="Your bank balance"
            />
            <Card
              icon={<FontAwesomeIcon icon={faCreditCard} />}
              listIcon={<FontAwesomeIcon icon={faEllipsisVertical} />}
              title={12}
              text="Uncategorized Transactions"
            />
            <Card
              icon={<FontAwesomeIcon icon={faFileCircleCheck} />}
              listIcon={<FontAwesomeIcon icon={faEllipsisVertical} />}
              title={7}
              text="Employees working today"
            />
            <Card
              icon={<FontAwesomeIcon icon={faCreditCard} />}
              listIcon={<FontAwesomeIcon icon={faEllipsisVertical} />}
              title={`${spending.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}`}
              text="This week card spending"
            />
          </div>

          {/* Large Card & Chart */}
          <div className="flex sm:flex-row flex-col  gap-6">
            {/* Large Cards */}
            <div className="flex flex-col gap-6">
              <LargeCard text="New Clients" amount={56} percent={+18.7} />
              <LargeCard text="Invoice overdue" amount={6} percent={+2.7} />
            </div>
            {/* Chart */}
            <div className=" h-[220px] w-full shadow-md bg-white rounded-xl">
              <Chart />
            </div>
          </div>

          {/* Table */}
          <div className="w-full bg-white rounded-xl px-4 py-3 shadow-md">
            <Table />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-3/12 w-full flex flex-col sm:flex-row-reverse lg:flex-col gap-6">
          <StatusBox />
          <TodoList />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
