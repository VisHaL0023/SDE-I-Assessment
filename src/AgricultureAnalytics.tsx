import "./AgricultureAnalytics.css";
import React, { useEffect } from "react";
import CropProductionTable from "./CropProductionTable";
import cropData from "../src/data/data.json";

interface CropData {
    [key: string]: {
        production: number;
        crop: string;
    };
}

const AgricultureAnalytics: React.FC = () => {
    // Process data to find max and min production for each year
    const maxProduction: CropData = {};
    const minProduction: CropData = {};

    function calculateCropData() {
        cropData.forEach((entry: any) => {
            const year = entry.Year;
            const production = entry["Crop Production (UOM:t(Tonnes))"];
            const cropName = entry["Crop Name"];

            if (typeof production === "number") {
                if (
                    !(year in maxProduction) ||
                    production > maxProduction[year].production
                ) {
                    maxProduction[year] = { production, crop: cropName };
                }

                if (
                    !(year in minProduction) ||
                    production < minProduction[year].production
                ) {
                    minProduction[year] = { production, crop: cropName };
                }
            }
        });
    }

    function calculateAverageData() {}

    useEffect(() => {
        calculateCropData();
        calculateAverageData();
    }, [cropData]);

    return (
        <div className="tableContainer">
            <div className="cropProductionTable">
                <h1>Crop Production Table</h1>
                <CropProductionTable
                    maxProduction={maxProduction}
                    minProduction={minProduction}
                />
            </div>
        </div>
    );
};

export default AgricultureAnalytics;
