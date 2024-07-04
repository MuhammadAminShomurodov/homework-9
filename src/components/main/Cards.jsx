import { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  console.log(data);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error:: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik bor");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredData = users.filter((user) =>
      user.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredData);
  }, [searchTerm, users]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div className="Error">Error: {error}</div>;
  }

  return (
    <div className="Cards">
      <div className="container">
        <div className="Search">
          <input
            type="text"
            placeholder="Searching..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="cards-all">
          {filteredUsers?.slice(0, count).map((user) => (
            <div className="card" key={user.id} onClick={() => setData(user)}>
              <div className="kub"></div>
              <div className="science">
                <p>Science</p>
              </div>
              <p>#ID: {user.id}</p>
              <h2>{user.body}</h2>
              <div className="card-p">
                <p>Floyd Miles</p>
                <span>3 Days Ago</span>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length > count && (
          <div
            className="load-more"
            onClick={() => setCount((prevCount) => prevCount + 4)}
          >
            Load More
          </div>
        )}

        {data.length == 0 ? (
          <></>
        ) : (
          <div className="cards-bottom">
            <p>#ID: {data?.id}</p>
            <h1>{data?.body}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
