"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useTheme } from "next-themes";

interface Props {
  incomes: number;
  expenses: number;
}

export default function IncomeExpenseChart({ incomes, expenses }: Props) {

  const data = [
    { name: "Incomes", value: incomes },
    { name: "Expenses", value: expenses },
  ];

  const { theme } = useTheme();

  const barColor = theme === "dark" ? "#ffffff" : "#1f2937";

  return (
    <div className="mt-12">

      <h2 className="text-xl font-semibold mb-4">
        Income vs Expenses
      </h2>

      <div className="h-75 w-full">

        <ResponsiveContainer width="80%" height="100%" className="mx-auto items-center">
          <BarChart data={data}>

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                color: "black"
              }}
              labelStyle={{ color: "black" }}
              itemStyle={{ color: "black" }}
            />

            <Bar dataKey="value" fill={barColor} />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}