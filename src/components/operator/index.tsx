interface operatorTypes {
  type: string,
  onClick?: any
}

export const Operator = (props:operatorTypes) => {
  const { type, onClick } = props
  return <button onClick={onClick}>{type}</button>
}