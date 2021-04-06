import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getPosts} from '../service/post-service'

export const getServerSideProps = async (context) => {
    const allPostsData = await getPosts();
    if (allPostsData) {
        return {
            props: {
                allPostsData
            }
        }
    }
}


const home = ({allPostsData}) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm Rriz. I'm a software engineer. You can contact me on <a href="#">Twitter</a></p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, title, body}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={'/posts/' + id}>
                                <a>
                                    <h3>{id}. {' '}{title}</h3>
                                </a>
                            </Link>
                            <p>{body}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default home;