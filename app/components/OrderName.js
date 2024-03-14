function OrderName({ nameHandler }) {
  return (
    <div id="order_name">
      <h4 className="m-0">choose name</h4>
      <form method="post" onSubmit={nameHandler}>
        <label>
          Order name
          <input className="block" name="name" />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default OrderName;
