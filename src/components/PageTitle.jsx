import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { BorderWidth, GridFill } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";

function PageTitle(props) {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "GridFill", value: "1" },
    { name: "Radio", value: "2" },
  ];

  return (
    <div className="title mt-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-5">
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Control
              type="text"
              placeholder={`Search ${props.show ? "Tv-Show" : "Movie"}`}
              className="me-2"
              onChange={(e) => {
                props.search(e.target.value);
              }}
            />
          </Form>
        </div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value);
                props.changeType();
              }}
            >
              {idx > 0 ? <GridFill /> : <BorderWidth />}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
export default PageTitle;
