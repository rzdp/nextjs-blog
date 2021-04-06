import Link from 'next/link';
import Layout from '../../components/layout.js'
import Head from 'next/head';

const firstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

        </Layout>
    )
}

export default firstPost;