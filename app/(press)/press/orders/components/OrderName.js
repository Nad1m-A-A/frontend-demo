function OrderName({ getOrderName }) {
  return (
    <form id="order_name" className="flex flex-col gap-2" action={getOrderName}>
      <input placeholder="Name" className="block" name="name" />
      <button>Next</button>
    </form>
  );
}

export default OrderName;
