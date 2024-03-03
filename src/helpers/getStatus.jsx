const getStatus = (status) => {
  switch (status) {
    case "important":
      return <span className="badge bg-danger">Önemli</span>;

    case "job":
      return <span className="badge bg-info">İş</span>;
    case "daily":
      return <span className="badge bg-success">Günlük</span>;
    default:
      return <span className="badge bg-black">Varsayılan</span>;
  }
};
export default getStatus;
