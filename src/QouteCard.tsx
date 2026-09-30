function QouteCard(  {
    text,
    onDelete,
}: {
    text: string;
    onDelete: () => void;
}) {
    return (
        <li className="qoute-card">
            <span>{text}</span>
            <button onClick={onDelete}>X</button>
        </li>
    );
}

export default QouteCard;