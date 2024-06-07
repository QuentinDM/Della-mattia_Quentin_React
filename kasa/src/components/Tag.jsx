function Tag(props) {
    //State
    const getTags = props.tag
    console.log(getTags);
    //Render
    return (
        <li>
            <p>{getTags}</p>
        </li>
    )
}

export default Tag ;