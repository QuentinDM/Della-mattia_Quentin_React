import data from '../data.json' ;

function Title() {
    // state (data)
    const titles = data;
    //comportements

    //RENDER 
    return <div>{titles.map((title) => {
        return <h2>{title.title}</h2>
    })}</div>
}
