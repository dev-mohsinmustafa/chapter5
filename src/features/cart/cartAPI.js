import axios from "axios";

export function fetchItems() {
  return axios.get("http://localhost:8082/cart");
  
}


export function addItems(item) {
  return axios.post("http://localhost:8082/cart", item);
  
}

// difficult
export function updateItem(id, itemUpdate) {
  console.log("cartApi me id or itemUpdate ko check kiya",{id,itemUpdate});
  return axios.patch(`http://localhost:8082/cart/${id}`, itemUpdate);
  
}


// easy
export function deleteItem(id) {
  return axios.delete(`http://localhost:8082/cart/${id}`);
  
}