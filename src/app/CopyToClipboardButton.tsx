export interface TCopyToClipboardButtonProps {
  onClick: () => void
}

export const CopyToClipboardButton = (props: TCopyToClipboardButtonProps) => {
  return (
    <button type="button" className="btn btn-secondary copyToClipboardBtn" onClick={props.onClick}>📋</button>
  )
}