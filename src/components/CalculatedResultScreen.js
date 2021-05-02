import React, { useEffect, useState } from "react";

const CalculatedResultScreen = ({ userData }) => {
    const [result, setResult] = useState(0);

    useEffect(() => {
        let outerCalc = 0;

        userData.map((outerData) => {
            if (outerData.height && outerData.width) {
                let innerCalc = 0;

                outerData.details.map((innerData) => {
                    if (innerData.lengthValue && innerData.number) {
                        innerCalc =
                            innerCalc +
                            parseInt(innerData.lengthValue) *
                                parseInt(innerData.number);
                    }

                    return true;
                });

                if (outerData.height && outerData.width && innerCalc) {
                    outerCalc +=
                        parseInt(innerCalc) +
                        parseInt(outerData.height) * parseInt(outerData.width);
                }
            }

            return true;
        });

        setResult(outerCalc);
    }, [userData]);

    return <div>{result && <div>{result}</div>}</div>;
};

export default CalculatedResultScreen;
