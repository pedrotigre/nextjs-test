function UserProfile(props) {
  return <h1>{props.name}</h1>;
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  console.log(req);
  console.log(res);

  // No need to getStaticPaths, since it doesn't pre-generate pages. Give us acess to req and res. And makes a new request every time.

  return {
    props: {
      name: 'Jack',
    },
  };
}

export default UserProfile;
