export default async function ServerComponent() {
  //   const user = use(userPromise);
  const res = await fetch("http://localhost:8080/api/user", {
      cache: "no-store",
    });
    const user = await res.json();
    // console.log("user: " + JSON.stringify(user));

  return (
    <div>
      <p>user name: {user.name}</p>
      <p>user age: {user.age}</p>
    </div>
  );
}
