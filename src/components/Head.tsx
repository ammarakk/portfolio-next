
import Head from "next/head";
interface Props {
    title: string;
    description: string;
    keywords: string;
  }
  
  const HeadComponent: React.FC<Props> = ({ title, description, keywords }) => {
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    );
  };
  
  export default HeadComponent;
  