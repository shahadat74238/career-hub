import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;