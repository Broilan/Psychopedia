import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface InfoboxProps {
  title: string;
  image?: string;
  data: { label: string; value: string | number }[];
}

export const Infobox: React.FC<InfoboxProps> = ({ title, image, data }) => {
  return (
    <Card className="w-full md:w-80 border border-gray-300 bg-gray-50 shadow">
      {/* Header */}
      <CardHeader>
        {image && <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />}
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <table className="w-full text-sm">
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 last:border-none">
                <td className="py-2 font-medium text-gray-700">{item.label}</td>
                <td className="py-2 text-gray-600">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
