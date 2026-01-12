function User({ name, email, avatar }) {
  return (
    <div className="user">
      <img src={avatar} alt={name} />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default User;
