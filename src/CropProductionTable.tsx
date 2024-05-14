import React from "react";
import { Table } from "@mantine/core";

interface Props {
    maxProduction: Record<string, { production: number; crop: string }>;
    minProduction: Record<string, { production: number; crop: string }>;
}

const CropProductionTable: React.FC<Props> = ({
    maxProduction,
    minProduction,
}) => {
    // Convert data into table rows
    const rows = Object.keys(maxProduction).map((year, ind) => (
        <Table.Tr key={ind}>
            <Table.Td>{year.split(",")[1]}</Table.Td>
            <Table.Td>{maxProduction[year].production}</Table.Td>
            <Table.Td>{minProduction[year].production}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table.ScrollContainer minWidth={100} type="native">
            <Table striped highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Year</Table.Th>
                        <Table.Th>
                            Crop with Maximum Production in that Year
                        </Table.Th>
                        <Table.Th>
                            Crop with Minimum Production in that Year
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
};

export default CropProductionTable;
