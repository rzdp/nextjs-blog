import Layout from '../../components/layout'
import {getPost, getPostsId} from "../../service/post-service";
import utilStyles from '../../styles/utils.module.css'
import Head from "next/head";

const post = ({postData}) => {
    console.log(postData);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <p>{postData.body}</p>
                </div>
            </article>
        </Layout>
    );
}

export const getStaticPaths = async () => {
    const paths = await getPostsId();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const postData = await getPost(params.id);
    return {
        props: {
            postData
        }
    }
}

export default post;