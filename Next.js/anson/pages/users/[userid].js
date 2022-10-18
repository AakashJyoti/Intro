const UserProfilePage = ({ user }) => {
  // console.log(user);
  return (
    <div>
      <p>Name : {user.name}</p>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Website : {user.website}</p>
      <p>Company : {user.company.name}</p>
      <p>City : {user.address.city}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { userid } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}

export default UserProfilePage;
