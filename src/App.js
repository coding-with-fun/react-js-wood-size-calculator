import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import validator from "validator";
import InputScreen from "./components/InputScreen";
import lodash from "lodash";
import CalculatedResultScreen from "./components/CalculatedResultScreen";

const App = () => {
    const initialOuterState = {
        height: "",
        width: "",
        details: [],
    };
    const initialInnerState = {
        lengthValue: "",
        number: "",
    };
    const [userData, setUserData] = useState([initialOuterState]);

    const handleRemoveOuterInputs = (valuesCopy) => {
        let localCopy = [...valuesCopy];
        localCopy.pop();
        return localCopy;
    };

    const handleAddOuterInputs = (valuesCopy) => {
        let localCopy = [...valuesCopy];
        localCopy.push(initialOuterState);
        return localCopy;
    };

    const handleRemoveInnerInputs = (valuesCopy, index) => {
        let localCopy = [...valuesCopy];
        localCopy[index].details.pop();
        return localCopy;
    };

    const handleAddInnerInputs = (valuesCopy, index) => {
        let localCopy = [...valuesCopy];
        localCopy[index].details.push(initialInnerState);
        return localCopy;
    };

    const handleInputValues = (e, index, innerIndex) => {
        let valuesCopy = [...userData];

        if (
            validator.isDecimal(e.target.value, {
                decimal_digits: "1,2",
            })
        ) {
            if (innerIndex + 1) {
                valuesCopy[index].details[innerIndex][e.target.name] =
                    e.target.value;
                if (
                    lodash.last(valuesCopy[index].details).lengthValue &&
                    lodash.last(valuesCopy[index].details).number &&
                    valuesCopy[index].height &&
                    valuesCopy[index].width
                ) {
                    valuesCopy = handleAddInnerInputs(valuesCopy, index);

                    if (
                        lodash.last(valuesCopy).height &&
                        lodash.last(valuesCopy).width
                    ) {
                        valuesCopy = handleAddOuterInputs(valuesCopy);
                    }
                }
            } else {
                valuesCopy[index][e.target.name] = e.target.value;
                if (
                    valuesCopy[index].height &&
                    valuesCopy[index].width &&
                    ((lodash.last(valuesCopy[index].details)?.lengthValue &&
                        lodash.last(valuesCopy[index].details)?.number) ||
                        valuesCopy[index].details.length < 1)
                ) {
                    valuesCopy = handleAddInnerInputs(valuesCopy, index);
                    valuesCopy = handleAddOuterInputs(valuesCopy);
                }
            }
        } else {
            if (lodash.isEmpty(e.target.value)) {
                if (innerIndex + 1) {
                    valuesCopy[index].details[innerIndex][e.target.name] =
                        e.target.value;
                    if (
                        (!valuesCopy[index].details[innerIndex].lengthValue ||
                            !valuesCopy[index].details[innerIndex].number) &&
                        innerIndex !== valuesCopy[index].details.length - 1
                    ) {
                        valuesCopy = handleRemoveInnerInputs(valuesCopy, index);
                        valuesCopy = handleRemoveOuterInputs(valuesCopy);
                    }
                } else {
                    valuesCopy[index][e.target.name] = e.target.value;
                    if (!valuesCopy[index].height || !valuesCopy[index].width) {
                        valuesCopy = handleRemoveInnerInputs(valuesCopy, index);
                        valuesCopy = handleRemoveOuterInputs(valuesCopy);
                    }
                }
            }
        }
        setUserData(valuesCopy);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <CalculatedResultScreen userData={userData} />
                <InputScreen
                    userData={userData}
                    handleInputValues={handleInputValues}
                />
            </Row>
        </Container>
    );
};

export default App;
