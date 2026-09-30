function Usercard({name, age}: {name: string; age: number}) {
    const status = age >= 18 ? "Adult" : "Minor";

    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age} - {status}</p>
        </div>
    );
}

export default Usercard;