export default function footer() {
  return (
    <>
      <footer className="bg-info text-center text-lg-start mt-5 border-top">
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
