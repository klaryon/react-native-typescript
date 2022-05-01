import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resp = await reqResApi.get<ReqResList>("/users", {
      params: { page: pageRef.current },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
      pageRef.current++;
    } else {
      alert("No more records");
    }
  };

  return { users, loadUsers };
};
