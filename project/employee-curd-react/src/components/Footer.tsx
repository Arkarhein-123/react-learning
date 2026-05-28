export default function Footer() {
  return (
    <>
      <footer className="bg-info text-center text-lg-start border-top">
        <div className="container p-4">
          <div className="text-center p-3">
            © {new Date().getFullYear()} Employee Management System. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
