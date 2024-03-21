"use client";

import EditableOrder from "./EditableOrder";

function EditableOrdersList({ orders }) {

  return (
    <div id="editable_orders_list" className="">
      {orders.map(({ name, details }, index) => (
        <EditableOrder key={index} name={name} details={details}/>
      ))}
    </div>
  );
}

export default EditableOrdersList;
