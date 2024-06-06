import { useState, useEffect, FC, FormEvent } from "react";
import { createUser, updateUser, getUsersById } from "../api/apiUrl";
import { UserFormProps } from "../utils/interface";
import Loading from "./Loading";
import Swal from "sweetalert2";

const UserForm: FC<UserFormProps> = ({ userId, onSuccess }) => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      getUsersById(userId).then((response: any) => {
        setName(response?.data?.name);
        setAvatar(response?.data?.avatar);
        setIsLoading(false);
      });
    }
  }, [userId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      name: name,
      avatar: avatar,
    };
    if (userId) {
      await updateUser(userId, user)
        .then(() => {
          onSuccess;
          setIsLoading(false);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Failed update",
            text: "Failed to update user",
            confirmButtonText: "OK",
          });
        });
    } else {
      await createUser(user)
        .then(() => {
          onSuccess;
          setIsLoading(false);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Failed create",
            text: "Failed to create user",
            confirmButtonText: "OK",
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isLoading && <Loading />}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          className="bg-white mt-1 block w-full shadow-sm p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Avatar
        </label>
        <input
          type="text"
          value={avatar}
          onChange={(e: any) => setAvatar(e.target.value)}
          className="bg-white mt-1 block w-full shadow-sm p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {userId ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
