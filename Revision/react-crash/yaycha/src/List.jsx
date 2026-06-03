
export default function List({ children }) {
    return (
        // Removed 'border-solid' and added base 'border border-2'
        <ul className="border border-2 border-dark">
            {children}
        </ul>
    );
}
