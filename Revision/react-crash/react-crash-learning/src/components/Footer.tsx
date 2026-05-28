interface FooterProps{
    footerText ?: string;
}
function Footer({footerText = "All right reserved 2026@ Bla Bla"} : FooterProps) {
  return (
    <div>
      <p>No CopyRight</p>
      <p>{footerText}</p>
    </div>
  )
}

export default Footer
