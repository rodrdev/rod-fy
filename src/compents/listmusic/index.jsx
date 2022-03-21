import "./style.css"

const ListMusic = () => {
    const listMusic = [
        {
            img: "https://www.theweeknd.com/sites/g/files/aaj14676/f/styles/suzuki_breakpoints_image_tablet_sq/public/release/202201/DFM-COVER-EXPLICIT.jpg?itok=DuppFyns",
            name: "the weeknd",
            audio: "",
            description: "Testando description"
        },
        {
            img: "https://www.theweeknd.com/sites/g/files/aaj14676/f/styles/suzuki_breakpoints_image_tablet_sq/public/release/202201/DFM-COVER-EXPLICIT.jpg?itok=DuppFyns",
            name: "the weeknd",
            audio: "",
            description: "Testando description"
        },
        {
            img: "https://www.theweeknd.com/sites/g/files/aaj14676/f/styles/suzuki_breakpoints_image_tablet_sq/public/release/202201/DFM-COVER-EXPLICIT.jpg?itok=DuppFyns",
            name: "the weeknd",
            audio: "",
            description: "Testando description"
        },
    ]
    return (
        <>
            <div className="container-music">
                <div className="box-music">
                    <img src={listMusic[0].img} alt="" />
                    <p className="name">{listMusic[0].name}</p>
                    <p className="description">{listMusic[0].description}</p>
                </div>
            </div>
            
        </>
    )
}

export default ListMusic