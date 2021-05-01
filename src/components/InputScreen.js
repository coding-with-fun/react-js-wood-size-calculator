import { TextField } from "@material-ui/core";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const InputScreen = ({ userData, handleInputValues }) => {
    return (
        <Col xl={6}>
            {userData.map((data, index) => {
                return (
                    <Fragment key={index}>
                        <Row className="mt-3">
                            <Col className="d-flex justify-content-end">
                                <TextField
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
                            <Col className="d-flex justify-content-start">
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

                        {data.details.map((details, innerIndex) => {
                            return (
                                <Row
                                    key={innerIndex}
                                    className="mt-3 justify-content-center"
                                >
                                    <Col className="d-flex" xl={4}>
                                        <TextField
                                            label="Length"
                                            name="lengthValue"
                                            variant="outlined"
                                            size="small"
                                            type="number"
                                            value={details.lengthValue}
                                            onChange={(e) =>
                                                handleInputValues(
                                                    e,
                                                    index,
                                                    innerIndex
                                                )
                                            }
                                        />
                                    </Col>
                                    <Col className="d-flex" xl={4}>
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
                    </Fragment>
                );
            })}
        </Col>
    );
};

export default InputScreen;
