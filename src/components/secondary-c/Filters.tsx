import { useState } from "react";
//styles
import "../../styles/components/filters.scss";
import { Form, Row, Col } from "react-bootstrap";

function Filters(props: any) {
  //useState
  
  // handles
  const handleChange = (e:any) => {
    const v = e.target.value;
    const i = e.target.id;
    props.handleChange(v, i);
  };

  return (
    <section className="container">
      <h2 className="title">Filters : </h2>
      <Form className="container bg-light">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="searchName">
            <Form.Label>Search by name:</Form.Label>
            <Form.Control
              required
              size="sm"
              type="text"
              placeholder="Example: Walter White"
              // value={data.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="orderBy">
            <Form.Label>Order by:</Form.Label>
            <Form.Select
              required
              // value={data.orderBy === "" ? "name" : data.orderBy}
              onChange={handleChange}
            >
              <option value={"name"}>Name</option>
              <option value={"nickname"}>Nickname</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="status">
            <Form.Label>Filter by status:</Form.Label>
            <Form.Select
              required
              // value={data.status === "" ? "name" : data.status}
              onChange={handleChange}
            >
              <option value={"all"}>All</option>
              <option value={"Deceased"}>Dead</option>
              <option value={"Presumed dead"}>Presumed dead</option>
              <option value={"Alive"}>Alive</option>
              <option value={"Unknown"}>Unknown</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="appearance">
            <Form.Label>Appears in Better-Call-Saul:</Form.Label>
            <Form.Select
              required
              // value={data.appearance === "" ? "name" : data.appearance}
              onChange={handleChange}
            >
              <option value={"all"}>All</option>
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </section>
  );
}

export default Filters;
