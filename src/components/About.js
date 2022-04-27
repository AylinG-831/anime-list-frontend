

function About() {
    return (
        <div className="about-div">
            <h1>Jikan ga Nai</h1>
            <p>Sorry about this POS website.</p>
            <p>Making a functioning website is above my skill level.</p>
            <p>As things stand, refresh the page after you pick an anime, by clicking "Add to List" three times. Every time. No exceptions.</p>
            <ul>
                <li>Pick a User and <span className="website-maker-warning">don't change it.</span></li>
                <li>If you do, you risk overriding that user list with the previous one every time you add an anime.</li>
                <li>This can be avoided if the page is refreshed. You can change a user after refreshing the page.</li>
                <li>With that warning out of the way ---</li>
                <li>Switch to either "Search" or "Random Anime" and pick a user.</li>
                <li><span className="website-maker-warning">Don't switch to another user.</span></li>
                <li>...Now, pick an anime! Click three times. I'm that incompenent at this whole thing. It won't work first try.</li>
                <li>Now, refresh the page.</li>
                <li>Then start over.</li>
                <li>Annoying, isn't it?</li>
            </ul>
        </div>
    )
}

export default About;