

export default function Item({ item, remove }) {
    return (
        <>
            <li>
                <span className="p-2 border border-bottom border-2">
                    {item.content} - <b>{item.name}</b>
                </span>
                <button className="btn btn-danger" onClick={() =>                   remove(item.id)}>Remove</button>
            </li>
        </>
    );
}
