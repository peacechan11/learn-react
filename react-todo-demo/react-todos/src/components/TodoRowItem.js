function TodoRowItem() {
    const rowNumber = 1;
    const rowDescription = 'Code Review';
    const rowAssigned = 'Pika';
    return (
        <tr>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}
export default TodoRowItem