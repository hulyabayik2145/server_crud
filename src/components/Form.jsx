import { v4 } from "uuid";
import axios from "axios";
const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //formdan verileri alma
    const title = e.target[0].value;
    const status = e.target[1].value;
    //inoutu kontrol et
    if (!title) {
      return alert("Lütfen başlık yazınız");
    }

    // veri tabaına eklenecek veriyi hazırla
    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };
    // console.log(newTodo);
    //oluştuırduğumuz todoyu api ye kaydet
    // fetch("http://localhost:3000/todos", {
    //   method: "POST",
    //   body: JSON.stringify(newTodo),
    //   //! api istegi başarışı olursa todo yu state e ekle
    // })
    //   .then(() => setTodos((todos) => [newTodo, ...todos]))
    //   .catch(() => alert("üzgünüz bir sorun oluştu"));
    //! axios ile api isteği oluşturacağız 2. yol
    axios
      .post("http://localhost:3000/todos", newTodo)
      // api isteiği başarılı olursa newTodo yu state e ekle
      .then(() => setTodos((todos) => [newTodo, ...todos]))
      .catch(() => alert("üzgünüm bir sorun oluştu"));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        className="form-control shadow"
        type="text"
        placeholder="Örn: Projeyi tamamla"
      />
      <select className="form-select w-50 shadow">
        <option>Varsayılan</option>

        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};
export default Form;
