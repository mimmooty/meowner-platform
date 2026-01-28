export default function ProductPage() {
  const products = [
    { id: 1, name: "เสื้อยืดลด 50%", price: 290 },
    { id: 2, name: "กางเกงยีนส์", price: 990 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">รายการสินค้า</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-red-500">{item.price} บาท</p>
          </div>
        ))}
      </div>
    </div>
  );
}
