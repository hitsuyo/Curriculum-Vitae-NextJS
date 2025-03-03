import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // const res = await fetch('http://localhost:3001/users')
  // const users = await res.json()

  // const res = await fetch('http://localhost:3001/users', { cache: 'no-store' })
  const res = await fetch("http://localhost:3001/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <main>
        <div className="container mx-auto">
          <h1>Users</h1>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default UsersPage;
