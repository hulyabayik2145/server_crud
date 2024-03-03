import { useState } from "react";
import formatDate from "../helpers/formatDate";
import Content from "./Content";
import axios from "axios";
import EditMode from "./EditMode";

const ListItem = ({ todo, setTodos, todos }) => {
  //! değiştiğinde arayüz değişecekse useState kullanmak zorundayız
  const [isEditMode, setIsEditMode] = useState(false);

  //! silme butonuna tıklanınca çalıştır
  const handleDelete = () => {
    //! veriyi api den sil
    axios
      .delete(`/todos/${todo.id}`)
      //! veriyi state den sil
      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );

    //window.location.reload(); //ekranı güncelleniyor
  };

  //form gonderilince çalışır
  const handleEdit = (e) => {
    e.preventDefault();

    //inputlardaki verileri al
    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;
    //console.log(newStatus, newTitle);
    //api deki ilgili todoyu guncelle
    axios
      .patch(`/todos/${todo.id}`, { title: newTitle, status: newStatus })
      //api isteği başarılı olursa arayüzü güncelle
      .then(() => {
        //arayüzü güncelle
        //bunun için state'deki eski todo yu kaldır uyerine yenisini koy
        // todunun title ve statusunu güncelle
        const updated = { ...todo, status: newStatus, title: newTitle };

        //dizideki eski todoyu kaldır yerine yenisini koy
        //egerki eleman güncellenecel eleman ise ozaman diziye güncel halini ekle(updated)
        //değilse dizideki halini koru(todo)
        const newTodos = todos?.map((todo) =>
          todo.id === updated.id ? updated : todo
        );
        //state i güncelle
        setTodos(newTodos);
      });
    //düzenleme modunu kapat
    setIsEditMode(false);
  };
  return (
    <li className="relative p-3 list-group-item d-flex justify-content-between align-items-center gap-2">
      {/* getStatus todo nun durumuna göre span döndürür */}
      {!isEditMode ? (
        <Content
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleDelete={handleDelete}
        />
      ) : (
        <EditMode
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleEdit={handleEdit}
        />
      )}
      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};
export default ListItem;
