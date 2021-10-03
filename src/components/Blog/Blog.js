import React from "react";
import { blogList } from "./blogList";
import Boxes from "./Boxes";
import Buttons from "./Buttons";
const Blog = () => {
    return (
        <section id="blog" className="container">
            <h2>Latest Blog</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <Boxes list={blogList} />
            <Buttons />
        </section>
    );
};

export default Blog;
