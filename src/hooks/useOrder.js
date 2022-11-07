import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://intense-cove-25675.herokuapp.com/order?user=${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return [orders, setOrders];
};
export default useOrder;
