//tarih fonksiyonu->tarihi alır ve geriye ay /gün formatında döndürür
const formatDate = (dateStr) => {
  //metin formatındaki tarhi aralarındaki - çizgiye göre parçalara ayırır
  const date = dateStr.split(".");
  return date[0] + "." + date[1];
};
export default formatDate;
