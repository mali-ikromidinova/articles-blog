import { Grid, Icon, Card, Image, Button } from "semantic-ui-react";

const ArticlesList = ({ articles, deleteBtn }) => {
  return (
    <div>
      <Grid columns={3}>
        {articles.map((item) => (
          <Grid.Column key={item.id}>
            <Card>
              <Image src={item.img} alt={item.title} />
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>by {item.author}</Card.Meta>
                <Card.Meta>written at: {item.createdAt}</Card.Meta>
                <Card.Description>{item.preview}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="tags" />
                  {item.topic}
                </a>
              </Card.Content>
              <Card.Content extra>
                <Button primary>Download pdf</Button>
                <Button secondary onClick={() => deleteBtn(item.id)}>
                  Delete
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesList;
