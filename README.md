# vite proje için adımlar

- `npm vreate vite klasör_ismi` > ye belirttiğimiz klasörü oluşturup içine react projesi oluşturur

- `npm create vite .` -> bulunduğumuz klasörün içine react projesi oluşturur.

- `nmp install` -> node modules indirme

- `nom run dev` -> projeyi ayağa kaldırma

# faydaları

- proje oluşturma/projeyi ayağa kaldırma gibi işlemlerde vite ile çok daha hızlı gerçekleştiririz.

- Gereksiz kodlardan ve dosyalardan arındırılmıuş bir react projesi oluşturur.

- Build işlemi çok daha hızlı

# değişenler

- App.js, index.js in yerini App.jsx ve main.jsx aldı
- projeyi ayağa kaldırırken npm start yerine npm run dev yazıyoruz.

# JSON-SERVER

- - sadece kendi bilgisayarımızda çalışan fake Apı oluşturmaya yarar

- - Kendimizi geliştirmek için basit yazdığımız uygulamaları backend ihtiyacını karşılar

- - Hızlı protoipleme: Backend dev. api ı oluşturdupu sğreçte uygulamanın temel özellikleirni geliştirebşlmek adına geçici bir süre kullanılabilir.

- json- server ile oluşturdupumuz api ye bütün http metodları istek atabilir.
- yaptığımız istek sonunda eğer verilere bir değişim yaparsak anlık olarak db.json da güncellenir.

# kurulum

- npm install json-server-> paketi indiririz

- db.json dosyası oluştur ve düzenle

- packe.json a server ı ayağa kaldırma komutu yaz

- komutu çalıştır.

# localde json yapısında veriler olşturup, npmjsson sayfasındaki kodlar ile postmande alıştırmalar yap.

# CRUD (create read update delete)

- oluşturma okuma düzenleme silme işlemleri

# AXIOS

- http istekleri için modern çözüm
- yerleşik değil paketini indirmek gerekir, projende yeni terminal aç ve npm install axios yaz enterla

- isteklerde fethch e göre daha az kod yazarız
- hataları daha detaylı bir şekilde gösteriri
- bazı işlemleri otomatikleştirir. örneğin .json() metodu ile yaptığımız formatlama işlemini otomatik yapar
- veri gönderirken otomatik olarak stringify yapar ve veriyi otomatik olarak body e kaydeder

## Get Karşılaştırma

### fetch

`  fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));`

### axios

`
axios.get("http://localhost:3000/todos")
.then((res) => setTodos(res.data));

`

### post karşılaştırma

### Fetch

//oluştuırduğumuz todoyu api ye kaydet
fetch("http://localhost:3000/todos", {
method: "POST",
body: JSON.stringify(newTodo),
//! api istegi başarışı olursa todo yu state e ekle
})
.then(() => setTodos((todos) => [newTodo, ...todos]))
başarısız olursa
.catch(() => alert("üzgünüz bir sorun oluştu"));

### axios

`//! axios ile api isteği oluşturacağız 2. yol
axios
.post("http://localhost:3000/todos", newTodo) //! axios  api isteği
// api isteiği başarılı olursa newTodo yu state e ekle
.then(() => setTodos((todos) => [newTodo, ...todos]))
.catch(() => alert("üzgünüm bir sorun oluştu"));
};`

### Delete karşılaştırma

### Fetch

`
fetch("http://localhost:3000/todos/4",
{ method: 'DELETE' })

`

### axios

- `
  axios
      .delete(`/todos/${todo.id}`)
      //! veriyi state den sil
      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );
`

# ES7+ React/Redux/React-Native snippets

## eklentisi ile react yazarken bir çok işlemi kısa yoldan çözebiliriz.

# öğrenmeden yükleme

# auto import eklentisi
#   s e r v e r _ c r u d  
 