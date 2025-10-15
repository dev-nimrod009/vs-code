import React from 'react'
import './styles.scss'
export default function HomePage() {
    const adventures = [
        {
            title: "Hiking Mt. Kenya",
            location: "Mt. Kenya National Park",
            desc: "Experience the thrill of summiting Kenya's highest peak with expert guides.",
            meta: "Duration: 3 Days | Difficulty: Challenging",
            price: "From $350",
            image: "images/hiking-mt-kenya.jpg",
            alt: "Hiking Mt. Kenya",
        }
    ]

    return (
        <div className="homepage">

            <div className="homepage__hero" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
                <div className="homepage__hero__overlay"></div>
                <div className="homepage__hero__content">
                    <h1 >Explore the Hidden Wonders of Kenya</h1>
                    <p  >Find your next adventure today</p>
                    <button  >
                        Find Your Adventure
                    </button>
                </div>
            </div>


            <form class="homepage__search_filter">
                <select name="homepage__search_filter__activity">
                    <option value="">Activity Type</option>
                    <option>Hiking</option>
                    <option>Kayaking</option>
                    <option>Climbing</option>
                    <option>Safari</option>
                </select>
                <input type="text" name="location" placeholder="Location" />
                <select name="homepage__search_filter__duration">
                    <option value="">Duration</option>
                    <option>1 day</option>
                    <option>2-3 days</option>
                    <option>1 week+</option>
                </select>
                <select name="homepage__search_filter__difficulty">
                    <option value="">Difficulty</option>
                    <option>Easy</option>
                    <option>Moderate</option>
                    <option>Challenging</option>
                </select>
                <button type="submit">Search</button>
            </form>


            <section class="homepage__featured_adventures">
                <h2>Featured Adventures</h2>
                <div class="homepage__featured_adventures__cards">
                    {adventures.map((adventure, index) => (
                        <div key={index} className="adventure-card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={adventure.image} alt={adventure.alt} className="w-full h-48 object-cover" />
                            <div className="adventure-card-content p-4">
                                <div className="adventure-card-title  ">{adventure.title}</div>
                                <div className="adventure-card-location ">{adventure.location}</div>
                                <div className="adventure-card-desc  ">{adventure.desc}</div>
                                <div className="adventure-card-meta ">{adventure.meta}</div>
                                <div className="adventure-card-price  ">{adventure.price}</div>
                                <button  >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div class="newsletter">
                <h2>Subscribe to our Newsletter</h2>
                <p>Get the latest adventures and offers straight to your inbox.</p>
                <form className="newsletter__form">
                    <input
                        type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe </button>
                </form>
            </div>
        </div>
    )
}
