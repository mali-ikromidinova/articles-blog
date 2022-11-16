import ArticlesList from "../components/ArticlesList";
import UseFetch from "../components/useFetch";
import { HeaderStyled, InputStyled } from "../components/Styles";

const AllArticles = () => {
  const {
    /*     data: items, */
    filterValue,
    isLoading,
    loadedArticles,
    filterHandler,
    deleteHandler,
  } = UseFetch("https://6373a125348e9472991207b8.mockapi.io/v1/articles");

  return (
    <section>
      <HeaderStyled as="h2" dividing>
        All articles
      </HeaderStyled>
      <InputStyled
        icon="search"
        iconPosition="left"
        placeholder="Search by title / tag / author "
        value={filterValue}
        onInput={(e) => filterHandler(e)}
      />
      <ArticlesList articles={loadedArticles} deleteBtn={deleteHandler} />
    </section>
  );
};

export default AllArticles;
