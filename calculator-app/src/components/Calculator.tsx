import React, { useState } from "react";
import { calculate } from "../utils/calculate";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    try {
      const calcResult = calculate(input);
      setResult(calcResult);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResult("Ошибка: " + error.message);
      } else {
        setResult("Ошибка: неизвестная ошибка");
      }
    }
  };

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ maxWidth: "100%", width: "320px", padding: "10px" }}
    >
      <h2 className="text-center">Калькулятор</h2>
      <Form.Control
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mb-2 text-center"
        style={{ fontSize: "20px", height: "50px" }}
      />
      <Row className="mt-2 g-1" style={{ width: "100%" }}>
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          "C",
          "=",
          "+",
          "^",
          "sqrt(",
        ].map((item) => (
          <Col xs={3} className="p-1" key={item}>
            <Button
              variant={
                item === "=" ? "success" : item === "C" ? "danger" : "primary"
              }
              onClick={() =>
                item === "C"
                  ? setInput("")
                  : item === "="
                  ? handleCalculate()
                  : handleButtonClick(item)
              }
              className="w-100"
              style={{ fontSize: "18px", height: "50px" }}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
      <div
        className="mt-3 p-2 border w-100 text-center"
        style={{ fontSize: "20px", minHeight: "50px" }}
      >
        Результат: {result}
      </div>
    </Container>
  );
};

export default Calculator;
