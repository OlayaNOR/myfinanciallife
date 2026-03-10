"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    category: string;
    total: number;
  }[];
}

const COLORS = [
  "#EDEDED",
  "#B7B7B5",
  "#CACACA",
  "#878787",
  "#727272",
  "#3F3F3F",
];

export default function ExpensesByCategoryChart({ data }: Props) {

  return (
    <div className="mt-12">

      <h2 className="text-xl font-semibold mb-4">
        Where is my money going?
      </h2>

      <div className="h-87.5 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="total"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >

              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

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

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}