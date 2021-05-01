import { TextField } from "@material-ui/core";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const InputScreen = ({ userData, handleInputValues }) => {
    return (
        <Col xl={6} className="mt-4">
            {userData.map((data, index) => {
                return (
                    <Fragment key={index}>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <TextField
                                    autoFocus
                                    label="Height"
                                    name="height"
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    value={data.height}
                                    onChange={(e) =>
                                        handleInputValues(e, index)
                                    }
                                />
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <TextField
                                    label="Width"
                                    name="width"
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    value={data.width}
                                    onChange={(e) =>
                                        handleInputValues(e, index)
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {data.details.map((details, innerIndex) => {
                                    return (
                                        <Row key={innerIndex}>
                                            <Col className="d-flex justify-content-center">
                                                <TextField
                                                    label="Length"
                                                    name="length"
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    value={details.length}
                                                    onChange={(e) =>
                                                        handleInputValues(
                                                            e,
                                                            index,
                                                            innerIndex
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col className="d-flex justify-content-center">
                                                <TextField
                                                    label="Number"
                                                    name="number"
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    value={details.number}
                                                    onChange={(e) =>
                                                        handleInputValues(
                                                            e,
                                                            index,
                                                            innerIndex
                                                        )
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    );
                                })}
                            </Col>
                        </Row>
                    </Fragment>
                );
            })}
        </Col>
    );
};

export default InputScreen;
