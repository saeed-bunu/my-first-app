function Profile ({name, age}: {name: string; age: number}) {
    return (
    <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
    </div>
    );
}
export default Profile;