interface operatorTypes {
  type: string
}

export const Operator = (props:operatorTypes) => {
  const { type } = props
  return <button>{type}</button>
}