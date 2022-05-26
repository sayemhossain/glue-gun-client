import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/order?user=${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return [orders, setOrders];
};
export default useOrder;
