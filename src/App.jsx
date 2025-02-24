import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const api = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setData(res.data.users)
      })
      .catch((err) => {
        return err;
      });
  };

  // console.log(data.data.users);
  
  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Hair Color</th>
            </tr>
          </thead>

          <tbody>
            {data.map((obj, i) => (
              <tr key={i}>
                <td>{obj.id}</td>
                <td>{obj.firstName} {obj.lastName}</td>
                <td>{obj.email}</td>
                <td>{obj.hair.color}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
