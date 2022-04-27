function Footer() {

        const currentDate = new Date; 
        const year = currentDate.getFullYear();
    
    return(
        <div>
            <h5>Made by Otaku Observer. 2022-{year}</h5>
        </div>
    )
}

export default Footer;