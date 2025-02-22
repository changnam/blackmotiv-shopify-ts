"use client";

// import { use } from "react";

type userType = {
  name: string,
  age: number
};

export default function ClientComponent({
  user,
}: {
  user: userType;
}) {
//   const user = use(userPromise);

  return (
    <div>
      <p>user name: {user.name}</p>
      <p>user age: {user.age}</p>
    </div>
  );
}
