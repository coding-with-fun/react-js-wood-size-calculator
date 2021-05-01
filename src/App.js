import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import validator from "validator";
import InputScreen from "./components/InputScreen";

const App = () => {
    const initialOuterState = [
        {
            height: "",
            width: "",
            details: [],
        },
    ];
    const initialInnerState = {
        length: "",
        number: "",
    };
    const [userData, setUserData] = useState(initialOuterState);

    const handleAddRemoveInnerInputs = (valuesCopy, index) => {
        let localCopy = [...valuesCopy];
        localCopy[index].details.push(initialInnerState);
        console.log(localCopy);
        return localCopy;
    };

    const handleInputValues = (e, index, innerIndex) => {
        let valuesCopy = [...userData];

        if (
            validator.isDecimal(e.target.value, {
                decimal_digits: "1,2",
            })
        ) {
            if (innerIndex) {
                valuesCopy = handleAddRemoveInnerInputs(valuesCopy, index);
                valuesCopy[index].details[innerIndex][e.target.name] =
                    e.target.value;
            } else {
                valuesCopy = handleAddRemoveInnerInputs(valuesCopy, index);
                valuesCopy[index][e.target.name] = e.target.value;
            }
            setUserData(valuesCopy);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <InputScreen
                    userData={userData}
                    handleInputValues={handleInputValues}
                />
            </Row>
        </Container>
    );
};

export default App;
