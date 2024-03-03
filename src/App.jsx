import { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";

//varsayılan olarak basUrl ekle
//yapılan bütün isteklerin başındaki api url ini belirler
axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState();
  //!bileşen ekrana basılma olayını izler
  useEffect(() => {
    //!api'dan todo verilerini lır(fetch ile)
    // fetch("http://localhost:3000/todos")
    //   .then((res) => res.json())
    //   .then((data) => setTodos(data));
    //!axios ile apiden veri alma
    // axios.get("http://localhost:3000/todos").then((res) => console.log(res));

    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "zaman aşımı",
        params: {
          _per_page: 5,
          _page: page,
        },
      })

      .then((res) => {
        setMaxPageCount(res.data.pages);
        setTodos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "zaman aşımı") {
          alert("istek zaman aşımına uğradı");
        }
      });
  }, [page]);

  return (
    <div className="container  p-3 p-md-5">
      <h2 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h2>
      <Form setTodos={setTodos} />
      <ul className="list-group">
        {/* veriler yok ise loader bas, */}
        {!todos && <Loader />}
        {/* todos un yanındaki ? optional chaining (?) demek, yani veriler gelene kadar hata vermesin diye */}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between my-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-warning"
        >
          {" "}
          {"< Geri"}{" "}
        </button>
        <span>{page}</span>
        <button
          disabled={page === maxPageCount}
          onClick={() => setPage(page + 1)}
          className="btn btn-warning"
        >
          {" "}
          {">İleri "}{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
