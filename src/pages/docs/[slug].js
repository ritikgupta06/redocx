import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from '@/styles/doc_page.module.css'; // Your CSS

const DocPage = ({ content, title }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>{title} Documentation</h1>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Footer />
    </>
  );
};

// This function generates the paths for the docs (react, javascript, node)
export async function getStaticPaths() {
  const slugs = ['react', 'javascript', 'node'];

  const paths = slugs.map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false,
  };
}

// This function fetches the markdown file content based on the slug
export async function getStaticProps({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), 'public', 'markdown', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const content = processedContent.toString();

  return {
    props: {
      content,
      title: slug.charAt(0).toUpperCase() + slug.slice(1), // Capitalize slug for title
    },
  };
}

export default DocPage;
