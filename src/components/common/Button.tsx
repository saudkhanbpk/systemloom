
interface ButtonType {
  title?: string;
  className?: string;
  handleClick?: () => void
}
function CommonButton(props: ButtonType) {
  const { title, className, handleClick } = props
  return (
    <>
      <button className={className} onClick={handleClick}>{title}</button>
    </>
  )
}

export default CommonButton
