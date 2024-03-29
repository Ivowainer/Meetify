const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>#{id}</div>
  )
}

export default Meeting