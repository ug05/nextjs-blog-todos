import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";

export default function BlogPage({ filteredPosts }) {
    return (
        <Layout title="Blog page">
            <ul>
                {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
                <Link href="/main-page">
                    <div className="flex cursor-pointer mt-12">
                        <ChevronDoubleLeftIcon className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                        </ChevronDoubleLeftIcon>
                        <span>Back to main page</span>
                    </div>
                </Link>
        </Layout>
    );
}
export async function getStaticProps() {
    const filteredPosts = await getAllPostsData();
    
    return {
        props: { filteredPosts },
        revalidate: 3,
    };
}