function OrderName({ getOrderName }) {
  return (
    <div id="order_name" className="max-w-md mx-auto">
      <h4 className="m-0 text-lg font-semibold">Choose Name</h4>
      <form action={getOrderName} className="mt-4">
        <label className="block">
          Order name
          <input className="block border border-gray-300 rounded px-3 py-2 mt-1 w-full" name="name" />
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Next</button>
      </form>
    </div>
  );
}

export default OrderName;
