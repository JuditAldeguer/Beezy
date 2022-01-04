//styles
import "../../styles/components/filters.scss";
import { Form, Row, Col } from "react-bootstrap";



type FiltersProps = {
  searchWord: string;
  orderBy: string;
  status: string;
  appearance: string;
  handleChange: (v: string, i: string) => void;
};


function Filters(props: FiltersProps) {
  // handles
  const handleChange = (e: any) => {
    // (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    const i = e.target.id;
    props.handleChange(v, i);
  };

  return (
    <>
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
                value={props.searchWord}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="orderBy">
              <Form.Label>Order by:</Form.Label>
              <Form.Select
                required
                value={props.orderBy}
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
                value={props.status}
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
                value={props.appearance}
                onChange={handleChange}
              >
                <option value={"all"}>All</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </Form.Select>
            </Form.Group>
            <div id="list"></div>
          </Row>
        </Form>
      </section>
    </>
  );
}

export default Filters;
