function Tag(props) {
    //State
    const getTags = props.tag
    console.log(getTags);
    //Render
    return (
        <li className="tag">
            <p className="tag-name">{getTags}</p>
        </li>
    )
}

export default Tag ;