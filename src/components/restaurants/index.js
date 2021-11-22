import Style from "../../components/restaurants/index.module.css"

const Restaurants=()=>{

    return(
        <div className={Style.containr+ " container "}>
            <h1 className={Style.title}> Showing 12 $cuisine Restaurants </h1>
            <section className="row">
                    <div className={"col-md-3 col-xl-6 "+ Style.rescont }>
                        <div className={Style.restaurant}></div>
                        <h4 className={Style.name}>Restaurant</h4>
                        <h5 className={Style.desc}><b>location:</b> abuja - <b>cuisine</b>: rice</h5>
                    </div>
                    <div className={"col-md-3 col-xl-6 "+ Style.rescont }>
                        <div className={Style.restaurant}></div>
                        <h4 className={Style.name}>Restaurant</h4>
                        <h5 className={Style.desc}><b>location:</b> abuja - <b>cuisine</b>: rice</h5>

                    </div>
                    <div className={"col-md-3 col-xl-6 "+ Style.rescont }>
                        <div className={Style.restaurant}></div>
                        <h4 className={Style.name}>Restaurant</h4>
                        <h5 className={Style.desc}><b>location:</b> abuja - <b>cuisine</b>: rice</h5>

                    </div>
                    <div className={"col-md-3 col-xl-6 "+ Style.rescont }>
                        <div className={Style.restaurant}></div>
                        <h4 className={Style.name}>Restaurant</h4>
                        <h5 className={Style.desc}><b>location:</b> abuja - <b>cuisine</b>: rice</h5>

                    </div>
            </section>
        </div>
    )
}

export default Restaurants