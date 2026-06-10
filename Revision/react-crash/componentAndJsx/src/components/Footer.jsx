const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="absolute p-4 bottom-0 left-0 w-full border-t border-gray-200 bg-blue-500">
      <p className="text-center"> &copy; {year}. All Right Reserved</p>
    </footer>
  );
}
