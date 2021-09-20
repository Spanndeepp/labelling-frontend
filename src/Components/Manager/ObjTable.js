import React from "react";
import Table from "react-bootstrap/Table";

const ObjTable = ({ data }) => {
  return (
    <div className="table-container">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Object Name</th>
            <th>Assigned To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{r.objectName}</td>
              <td>{r.assignedTo ? r.assignedTo : "-"}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ObjTable;
