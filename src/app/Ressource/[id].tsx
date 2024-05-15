// [id].tsx
import { useRouter } from 'next/router';
import { getAllRessources, getRessourceById, RessourceById } from '@/lib/ressource/ressource.service'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

type Props = {
  ressource: RessourceById
}

const Post = ({ressource}: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post with ID: {id}, {ressource.id}</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllRessources()
  const ids = res.data.map(ressource => {
    return ressource.id
  })

  const paths = ids.map(id => ({
    params: { id: id.toString() }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  if (!context.params || typeof context.params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const { id } = context.params

  const ressource = await getRessourceById(parseInt(id))

  return {
    props: {
      ressource: ressource.data
    },
    revalidate: 60
  }
}