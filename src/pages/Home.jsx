import { useUser } from '../hooks/useUser';

function Home() {
  const { user } = useUser();

  return (
    <div className="py-8">
      <h2>
        {user.user_metadata.firstName} {user.user_metadata.lastName}
      </h2>
      <h3>{user.id}</h3>
      <button>Sign Out</button>
    </div>
  );
}

export default Home;
